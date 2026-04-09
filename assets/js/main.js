function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  if (navMenu) navMenu.classList.toggle("open");
}

function runFadeIns() {
  document.querySelectorAll(".fade-in").forEach((el, index) => {
    setTimeout(() => el.classList.add("visible"), index * 90);
  });
}

function setupActiveNav() {
  const currentPage = document.body.dataset.page;
  if (!currentPage) return;

  document.querySelectorAll("#navMenu a").forEach((link) => link.classList.remove("active"));
  const navLink = document.getElementById("nav-" + currentPage);
  if (navLink) navLink.classList.add("active");
}

function submitContact(event) {
  if (event) event.preventDefault();
  alert("Thank you for your message. Our team will contact you within 24 hours.");
}

function closeMenuOnNavClick() {
  const navMenu = document.getElementById("navMenu");
  if (!navMenu) return;

  navMenu.addEventListener("click", (e) => {
    const a = e.target && e.target.closest ? e.target.closest("a") : null;
    if (!a) return;
    navMenu.classList.remove("open");
  });
}

function setupMobileDropdowns() {
  const navMenu = document.getElementById("navMenu");
  if (!navMenu) return;

  navMenu.querySelectorAll(".nav-dd > a").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      const isOpen = navMenu.classList.contains("open");
      if (!isOpen) return; // desktop: let hover work

      const parent = trigger.parentElement;
      const menu = parent ? parent.querySelector(".dd-menu") : null;
      if (!menu) return;

      e.preventDefault();
      const isShown = menu.style.display === "block";
      menu.style.display = isShown ? "none" : "block";
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  setupActiveNav();
  runFadeIns();
  closeMenuOnNavClick();
  setupMobileDropdowns();
});
