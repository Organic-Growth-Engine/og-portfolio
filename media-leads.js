export function initSignupForm() {
  const form = document.querySelector('[data-signup-form]');
  if (!form) return;
  const input = form.querySelector("input[type='email']");
  const button = form.querySelector('button');
  const status = form.querySelector('[data-signup-status]');
  let pending = false;
  const showStatus = (message, isError = false) => {
    status.textContent = message;
    status.classList.toggle('is-error', isError);
  };
  input.addEventListener('input', () => {
    input.removeAttribute('aria-invalid');
    if (!pending) showStatus('');
  });
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (pending) return;
    input.value = input.value.trim();
    if (!input.checkValidity() || input.value.length > 254) {
      input.setAttribute('aria-invalid', 'true');
      showStatus('Please enter a valid email address.', true);
      input.focus();
      return;
    }
    pending = true;
    button.disabled = true;
    form.setAttribute('aria-busy', 'true');
    showStatus('Signing you up.');
    // The main website proxies /portfolio/* to this separate Vercel project.
    const prefix = /^\/portfolio(?:\/|$)/.test(window.location.pathname) ? '/portfolio' : '';
    try {
      const response = await fetch(`${prefix}/api/media-leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email: input.value.toLowerCase() }),
        signal: AbortSignal.timeout(15000),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error('Signup failed');
      form.reset();
      showStatus("You're on the list. Talk soon.");
    } catch {
      showStatus("Couldn't sign you up just now. Please try again.", true);
    } finally {
      pending = false;
      button.disabled = false;
      form.removeAttribute('aria-busy');
    }
  });
}
