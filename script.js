const WA_NUMBER = "525541935978";

document.body.classList.add("loading");

const loader = document.getElementById("loader");
window.addEventListener("load", () => {
  window.setTimeout(() => {
    loader?.classList.add("is-hidden");
    document.body.classList.remove("loading");
    document.querySelectorAll("[data-hero-count]").forEach((el) => animateValue(el));
  }, 1650);
});

const nav = document.getElementById("nav");
const ham = document.getElementById("ham");
const mob = document.getElementById("mob");

const setNavState = () => {
  nav?.classList.toggle("scrolled", window.scrollY > 24);
};

window.addEventListener("scroll", setNavState, { passive: true });
setNavState();

ham?.addEventListener("click", () => {
  const nextState = !mob?.classList.contains("is-open");
  ham.classList.toggle("is-open", nextState);
  ham.setAttribute("aria-expanded", String(nextState));
  mob?.classList.toggle("is-open", nextState);
});

mob?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    ham?.classList.remove("is-open");
    ham?.setAttribute("aria-expanded", "false");
    mob.classList.remove("is-open");
  });
});

const phrases = [
  "fugas y tuberías",
  "drenajes tapados",
  "bombas de agua",
  "calentadores solares",
  "baños y tinas"
];

const twText = document.getElementById("twText");
let phraseIndex = 0;
let letterIndex = 0;
let removing = false;

function typeLoop() {
  if (!twText) return;

  const phrase = phrases[phraseIndex];
  if (removing) {
    letterIndex -= 1;
  } else {
    letterIndex += 1;
  }

  twText.textContent = phrase.slice(0, letterIndex);

  let delay = removing ? 34 : 64;
  if (!removing && letterIndex === phrase.length) {
    delay = 1350;
    removing = true;
  }

  if (removing && letterIndex === 0) {
    removing = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 260;
  }

  window.setTimeout(typeLoop, delay);
}

typeLoop();

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll(".rev").forEach((el) => revealObserver.observe(el));

function animateValue(el) {
  if (el.dataset.counted === "true") return;
  const end = Number(el.dataset.count || el.dataset.heroCount);
  if (!Number.isFinite(end)) return;

  el.dataset.counted = "true";
  const prefix = el.dataset.prefix || "";
  const suffix = el.dataset.suffix || "";
  const duration = 1150;
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(end * eased);
    el.textContent = `${prefix}${value}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateValue(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll("[data-count], [data-hero-count]").forEach((el) => {
  counterObserver.observe(el);
});

const parallaxTargets = [
  document.querySelector(".hero-bg"),
  document.querySelector(".why-bg"),
  document.querySelector(".numbers-bg"),
  document.querySelector(".contact-info-bg")
].filter(Boolean);

let ticking = false;
function updateParallax() {
  parallaxTargets.forEach((el) => {
    const rect = el.parentElement.getBoundingClientRect();
    const offset = rect.top * -0.035;
    el.style.transform = `scale(1.08) translate3d(0, ${offset}px, 0)`;
  });
  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
}, { passive: true });

updateParallax();

function particleField(canvas, color = "244,130,31", density = 46) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let particles = [];
  let width = 0;
  let height = 0;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.max(1, Math.floor(width * dpr));
    canvas.height = Math.max(1, Math.floor(height * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.max(14, Math.floor((width * height) / 28000));
    particles = Array.from({ length: Math.min(density, count) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.7 + .6,
      vx: (Math.random() - .5) * .28,
      vy: (Math.random() - .5) * .28,
      a: Math.random() * .45 + .18
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p, idx) => {
      if (!reduceMotion) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color}, ${p.a})`;
      ctx.fill();

      for (let j = idx + 1; j < particles.length; j += 1) {
        const q = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.strokeStyle = `rgba(${color}, ${((120 - dist) / 120) * .12})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }
    });

    if (!reduceMotion) requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener("resize", resize);
}

particleField(document.getElementById("pcanvas"), "244,130,31", 52);
particleField(document.getElementById("pcanvasWhy"), "255,255,255", 34);
particleField(document.getElementById("pcanvasGaleria"), "244,130,31", 44);
particleField(document.getElementById("pcanvasContact"), "255,255,255", 28);

const form = document.getElementById("cForm");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const fields = [...form.querySelectorAll("[required]")];
  const invalid = fields.filter((field) => !field.value.trim());
  fields.forEach((field) => field.classList.toggle("is-invalid", invalid.includes(field)));
  if (invalid.length) {
    invalid[0].focus();
    return;
  }

  const data = new FormData(form);
  const message = [
    "Hola, necesito un servicio de A Jiménez e Hijos.",
    `Nombre: ${data.get("nombre")}`,
    `Teléfono: ${data.get("telefono")}`,
    `Servicio: ${data.get("tipo")}`,
    `Detalle: ${data.get("mensaje") || "Sin detalle adicional"}`
  ].join("\n");

  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});
