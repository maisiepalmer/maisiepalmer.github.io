// Smooth fade between pages
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    if (link.hostname === window.location.hostname) {
      e.preventDefault();
      document.body.style.opacity = 0;
      setTimeout(() => {
        window.location = link.href;
      }, 300);
    }
  });
});

window.addEventListener("pageshow", () => {
  document.body.style.opacity = 1;
});
