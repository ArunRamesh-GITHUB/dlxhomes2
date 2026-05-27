import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  const body = await request.json();

  console.log("[cooling-enquiry]", JSON.stringify({
    timestamp: new Date().toISOString(),
    ...body,
  }));

  const formspreeId = process.env.FORMSPREE_FORM_ID;
  if (formspreeId) {
    try {
      await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(body),
      });
    } catch (e) {
      console.error("[cooling-enquiry] Formspree error:", e);
    }
  }

  return NextResponse.json({ ok: true });
}
