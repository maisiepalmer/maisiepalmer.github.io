// Fade and slide elements in on scroll
const slideElements = document.querySelectorAll('.gallery-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

slideElements.forEach(el => observer.observe(el));

// Optional: Smooth page transitions
const links = document.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', (e) => {
    if (link.href && !link.href.includes('#')) {
      e.preventDefault();
      document.body.style.opacity = 0;
      setTimeout(() => {
        window.location = link.href;
      }, 400);
    }
  });
});

window.addEventListener('pageshow', () => {
  document.body.style.opacity = 1;
});
