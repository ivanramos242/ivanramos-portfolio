const header = document.querySelector("#header");
const toggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const glow = document.querySelector(".cursor-glow");
const reveals = document.querySelectorAll(".reveal");
const processSteps = document.querySelectorAll(".process-steps article");
const dialNumber = document.querySelector("#dial-number");

window.addEventListener("scroll", () => header.classList.toggle("scrolled", scrollY > 30), { passive: true });

toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  mobileNav.classList.toggle("open", !open);
});

mobileNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  toggle.setAttribute("aria-expanded", "false");
  mobileNav.classList.remove("open");
}));

window.addEventListener("pointermove", event => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
}, { passive: true });

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });
reveals.forEach(element => revealObserver.observe(element));

const stepObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) dialNumber.textContent = entry.target.dataset.step;
  });
}, { threshold: 0.55 });
processSteps.forEach(step => stepObserver.observe(step));

document.querySelectorAll(".project-visual").forEach(visual => {
  visual.addEventListener("pointermove", event => {
    const rect = visual.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    visual.style.transform = `perspective(1000px) rotateX(${-y * 1.4}deg) rotateY(${x * 1.4}deg)`;
  });
  visual.addEventListener("pointerleave", () => visual.style.transform = "");
});
