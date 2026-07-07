// Cloudflare Pages Function: POST /api/submit
// Validates a lead submission, stores it in Supabase, and notifies via Telegram.

const UK_POSTCODE_RE = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i;
const UK_PHONE_RE = /^(\+44\d{9,10}|0\d{9,10})$/;
const HEATING_TYPES = new Set(['Oil', 'LPG', 'Other']);
const CALL_TIMES = new Set(['Morning', 'Afternoon', 'Evening']);
const MIN_FILL_TIME_MS = 3000;

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status: status || 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  let data;
  try {
    data = await request.json();
  } catch (e) {
    return json({ error: 'Invalid JSON' }, 400);
  }

  // Honeypot: bots tend to fill every field
  if (data.company) {
    return json({ ok: true }); // silently accept, do nothing
  }

  // Timing check: reject if submitted faster than MIN_FILL_TIME_MS after page load
  const loadedAt = Number(data.loaded_at);
  if (!loadedAt || Date.now() - loadedAt < MIN_FILL_TIME_MS) {
    return json({ ok: true }); // silently accept, do nothing
  }

  const name = String(data.name || '').trim().slice(0, 200);
  const phoneRaw = String(data.phone || '').trim();
  const phone = phoneRaw.replace(/[\s-]/g, '');
  const postcode = String(data.postcode || '').trim().toUpperCase();
  const heatingType = String(data.heating_type || '').trim();
  const callTime = String(data.call_time || '').trim();

  const errors = [];
  if (!name) errors.push('Name is required');
  if (!UK_PHONE_RE.test(phone)) errors.push('Enter a valid UK phone number');
  if (!UK_POSTCODE_RE.test(postcode)) errors.push('Enter a valid UK postcode');
  if (!HEATING_TYPES.has(heatingType)) errors.push('Select a valid heating type');
  if (!CALL_TIMES.has(callTime)) errors.push('Select a valid call time');

  if (errors.length) {
    return json({ error: errors.join('; ') }, 400);
  }

  const lead = {
    name: name,
    phone: phoneRaw,
    postcode: postcode,
    heating_type: heatingType,
    call_time: callTime,
    status: 'new'
  };

  // Insert into Supabase
  try {
    const supabaseRes = await fetch(`${env.SUPABASE_URL}/rest/v1/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: env.SUPABASE_SERVICE_KEY,
        Authorization: `Bearer ${env.SUPABASE_SERVICE_KEY}`,
        Prefer: 'return=minimal'
      },
      body: JSON.stringify(lead)
    });

    if (!supabaseRes.ok) {
      const text = await supabaseRes.text();
      console.error('Supabase insert failed:', supabaseRes.status, text);
      return json({ error: 'Could not save lead' }, 502);
    }
  } catch (e) {
    console.error('Supabase request error:', e);
    return json({ error: 'Could not save lead' }, 502);
  }

  // Fire Telegram notification (best-effort — don't fail the request if this fails)
  try {
    const message =
      `🔥 New lead: ${name}, ${phoneRaw}, ${postcode}, ${heatingType}, call ${callTime}`;

    await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: env.TELEGRAM_CHAT_ID,
        text: message
      })
    });
  } catch (e) {
    console.error('Telegram notify failed:', e);
  }

  return json({ ok: true });
}
