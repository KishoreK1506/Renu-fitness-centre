// Mobile menu
const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");

burger?.addEventListener("click", () => {
  const open = burger.getAttribute("aria-expanded") === "true";
  burger.setAttribute("aria-expanded", String(!open));
  mobileNav.hidden = open;
});

// Form (demo)
const form = document.getElementById("applyForm");
const toast = document.getElementById("toast");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  toast.hidden = false;

  setTimeout(() => {
    toast.hidden = true;
    form.reset();
  }, 2500);
});

// Testimonials slider
const testimonials = [
  {
    quote:
      "I finally found a plan I could keep up with. The weekly check-in made me stay consistent even when life got busy.",
    name: "Laura",
    tag: "Consistency & confidence",
  },
  {
    quote:
      "The structure was simple, and the feedback helped me stop guessing. Progress felt steady instead of random.",
    name: "Andrea",
    tag: "Strength & routine",
  },
  {
    quote:
      "Accountability changed everything. Small changes each week added up without feeling extreme.",
    name: "Catherine",
    tag: "Sustainable progress",
  },
];

let idx = 0;
const slide = document.getElementById("slide");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const dots = document.getElementById("dots");

function renderDots() {
  dots.innerHTML = "";
  testimonials.forEach((_, i) => {
    const d = document.createElement("button");
    d.className = "dot" + (i === idx ? " active" : "");
    d.setAttribute("aria-label", `Go to testimonial ${i + 1}`);
    d.addEventListener("click", () => {
      idx = i;
      render();
    });
    dots.appendChild(d);
  });
}

function render() {
  const t = testimonials[idx];
  slide.innerHTML = `
    <p class="quote">“${t.quote}”</p>
    <div class="person">
      <div class="avatar" aria-hidden="true"></div>
      <div>
        <div><strong>${t.name}</strong></div>
        <div class="muted">${t.tag}</div>
      </div>
    </div>
  `;
  renderDots();
}

prev?.addEventListener("click", () => {
  idx = (idx - 1 + testimonials.length) % testimonials.length;
  render();
});

next?.addEventListener("click", () => {
  idx = (idx + 1) % testimonials.length;
  render();
});

render();
document.getElementById("year").textContent = new Date().getFullYear();
