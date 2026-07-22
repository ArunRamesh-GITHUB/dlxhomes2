(function () {
  var form = document.getElementById('lead-form');
  var submitBtn = document.getElementById('submit-btn');
  var successState = document.getElementById('success-state');
  var errorState = document.getElementById('error-state');
  var loadedAt = Date.now();

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    errorState.hidden = true;

    var data = {
      name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      postcode: form.postcode.value.trim(),
      heating_type: form.heating_type.value,
      call_time: form.call_time.value,
      hp_check_1a2b: form.hp_check_1a2b.value, // honeypot
      loaded_at: loadedAt
    };

    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting…';

    fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(function (res) {
        if (!res.ok) throw new Error('submit failed');
        return res.json();
      })
      .then(function () {
        form.hidden = true;
        successState.hidden = false;
        successState.scrollIntoView({ behavior: 'smooth', block: 'start' });
      })
      .catch(function () {
        errorState.hidden = false;
        submitBtn.disabled = false;
        submitBtn.textContent = 'Check My Eligibility';
      });
  });
})();
