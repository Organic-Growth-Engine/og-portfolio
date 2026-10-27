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
  initSignupForm();
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
}

/* --- Custom Magnetic Cursor --- */
function initCustomCursor() {
  if (!window.matchMedia("(pointer: fine)").matches) return;

  const dot = document.getElementById("cursor-dot");
  const circle = document.getElementById("cursor-circle");

  if (!dot || !circle) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let circleX = mouseX;
  let circleY = mouseY;
  let frameId = null;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    if (frameId === null && !document.hidden) {
      frameId = requestAnimationFrame(renderCursor);
    }
  });

  function renderCursor() {
    circleX += (mouseX - circleX) * 0.18;
    circleY += (mouseY - circleY) * 0.18;
    circle.style.transform = `translate(${circleX}px, ${circleY}px)`;
    if (Math.abs(mouseX - circleX) + Math.abs(mouseY - circleY) > 0.2) {
      frameId = requestAnimationFrame(renderCursor);
    } else {
      circleX = mouseX;
      circleY = mouseY;
      circle.style.transform = `translate(${circleX}px, ${circleY}px)`;
      frameId = null;
    }
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden && frameId !== null) {
      cancelAnimationFrame(frameId);
      frameId = null;
    }
  });

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

/* --- Footer Email Sign-up --- */
// Paste a form service URL here (e.g. Formspree, Mailchimp, ConvertKit) to
// start collecting emails. It receives a JSON POST: { "email": "..." }.
const SIGNUP_ENDPOINT = "";

function initSignupForm() {
  const form = document.querySelector("[data-signup-form]");
  if (!form) return;

  const input = form.querySelector("input[type='email']");
  const button = form.querySelector("button");
  const status = form.querySelector("[data-signup-status]");

  const showStatus = (message, isError = false) => {
    status.textContent = message;
    status.classList.toggle("is-error", isError);
  };

  input.addEventListener("input", () => {
    input.removeAttribute("aria-invalid");
    if (status.classList.contains("is-error")) showStatus("");
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = input.value.trim();

    if (!input.checkValidity() || !email) {
      input.setAttribute("aria-invalid", "true");
      showStatus("Please enter a valid email address.", true);
      input.focus();
      return;
    }

    if (!SIGNUP_ENDPOINT) {
      showStatus("Sign-ups open soon. Thanks for your interest!");
      return;
    }

    button.disabled = true;
    showStatus("Signing you up…");
    try {
      const response = await fetch(SIGNUP_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      form.reset();
      showStatus("You're on the list. Talk soon.");
    } catch {
      showStatus("Couldn't sign you up just now. Please try again.", true);
    } finally {
      button.disabled = false;
    }
  });
}
