/**
 * STUDIOFORM® — Landing Page Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initLiveClock();
});

/* --- Custom Magnetic Cursor --- */
function initCustomCursor() {
  const dot = document.getElementById('cursor-dot');
  const circle = document.getElementById('cursor-circle');

  if (!dot || !circle) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let circleX = mouseX;
  let circleY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function renderCursor() {
    circleX += (mouseX - circleX) * 0.18;
    circleY += (mouseY - circleY) * 0.18;
    circle.style.transform = `translate(${circleX}px, ${circleY}px)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Hover states on links
  const links = document.querySelectorAll('a');
  links.forEach((link) => {
    link.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    link.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

/* --- Live Clock (Brand Section) --- */
function initLiveClock() {
  const el = document.getElementById('brand-live-time');
  if (!el) return;

  function tick() {
    const now = new Date();
    const h = now.getHours();
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    const ampm = h >= 12 ? 'PM' : 'AM';
    const h12 = String(h % 12 || 12).padStart(2, '0');
    el.textContent = `${h12}:${m}:${s} ${ampm}`;
  }

  tick();
  setInterval(tick, 1000);
}
