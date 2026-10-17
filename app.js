import { animate, scroll } from "motion";

/**
 * STUDIOFORM® — Landing Page Scripts
 */

document.addEventListener("DOMContentLoaded", () => {
  initCustomCursor();
  initLiveClock();
  initOgInterlude();
  initPinnedSections();
  initSectionLinks();
});

/* --- Scroll-Built OG Interlude --- */
function initOgInterlude() {
  const interlude = document.getElementById("og-interlude");
  const content = interlude?.querySelector(".og-interlude-content");

  if (!interlude || !content) return;

  scroll(
    (progress) => {
      const eased = progress * progress * (3 - 2 * progress);
      content.style.opacity = Math.max(
        0,
        1 - Math.abs(progress - 0.5) * 2,
      ).toFixed(3);
      content.style.transform = `translateY(${(0.5 - eased) * 12}vh) scale(${0.9 + eased * 0.1})`;
    },
    { target: interlude },
  );
}

/* --- Full-Panel Section Links --- */
function initSectionLinks() {
  document.querySelectorAll("[data-section-page]").forEach((panel) => {
    const openPage = () => {
      window.location.href = panel.dataset.sectionPage;
    };

    panel.addEventListener("click", (event) => {
      if (!event.target.closest("a")) openPage();
    });
    panel.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openPage();
      }
    });
  });
}

/* --- Pinned Section Gallery --- */
function initPinnedSections() {
  const stack = document.querySelector(".sections-stack");
  const track = document.querySelector(".sections-track");
  const panels = [...document.querySelectorAll(".brand-section")];

  if (!stack || !track || !panels.length) return;

  scroll(
    animate(track, {
      transform: ["none", `translateX(-${(panels.length - 1) * 100}vw)`],
    }),
    { target: stack },
  );

  scroll(
    (progress) => {
      const position = progress * (panels.length - 1);

      panels.forEach((panel, index) => {
        const reveal = Math.max(0, Math.min(1, 1 - Math.abs(position - index)));
        const blur = reveal < 0.8 ? ((0.8 - reveal) / 0.8) * 8 : 0;
        panel.style.filter = `blur(${blur.toFixed(2)}px)`;
      });
    },
    { target: stack },
  );
}

/* --- Custom Magnetic Cursor --- */
function initCustomCursor() {
  const dot = document.getElementById("cursor-dot");
  const circle = document.getElementById("cursor-circle");

  if (!dot || !circle) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let circleX = mouseX;
  let circleY = mouseY;

  window.addEventListener("mousemove", (e) => {
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
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("mouseenter", () =>
      document.body.classList.add("cursor-hover"),
    );
    link.addEventListener("mouseleave", () =>
      document.body.classList.remove("cursor-hover"),
    );
  });
}

/* --- Live Clock (Brand Section) --- */
function initLiveClock() {
  const el = document.getElementById("brand-live-time");
  if (!el) return;

  function tick() {
    const now = new Date();
    const h = now.getHours();
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");
    const ampm = h >= 12 ? "PM" : "AM";
    const h12 = String(h % 12 || 12).padStart(2, "0");
    el.textContent = `${h12}:${m}:${s} ${ampm}`;
  }

  tick();
  setInterval(tick, 1000);
}
