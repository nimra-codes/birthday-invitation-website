
// Customize these values for the real celebration.
const EVENT_DATE = "2027-05-23T00:00:00";

// Replace with the host's real email address. RSVP opens the visitor's email app.
const RSVP_EMAIL = "hello@example.com";

const $ = (id) => document.getElementById(id);

function updateCountdown() {
  const target = new Date(EVENT_DATE).getTime();
  const now = Date.now();
  const distance = target - now;

  if (distance <= 0) {
    $("days").textContent = "0";
    $("hours").textContent = "0";
    $("minutes").textContent = "0";
    $("seconds").textContent = "0";

    const heading = document.querySelector(".countdown-wrap .script-heading");
    if (heading) heading.textContent = "The Celebration Is Here! ♥";

    return;
  }

  $("days").textContent = Math.floor(distance / 86400000);
  $("hours").textContent = Math.floor((distance % 86400000) / 3600000);
  $("minutes").textContent = Math.floor((distance % 3600000) / 60000);
  $("seconds").textContent = Math.floor((distance % 60000) / 1000);
}

updateCountdown();
setInterval(updateCountdown, 1000);

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));

$("rsvp-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const subject = `Birthday RSVP from ${data.get("name")}`;

  const body = [
    "Nimra's Birthday RSVP",
    "",
    `Name: ${data.get("name")}`,
    `Email: ${data.get("email")}`,
    `Attendance: ${data.get("attendance")}`,
    `Number of guests: ${data.get("guests")}`,
    `Message: ${data.get("message") || "None"}`
  ].join("\n");

  $("form-note").textContent = "Opening your email app… If it doesn't open, check that a default email app is configured.";

  window.location.href = `mailto:${RSVP_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
