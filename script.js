// Toggle Dark Mode
const darkModeToggle = document.querySelector('.dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Parallax Effect
window.addEventListener('scroll', () => {
  const layers = document.querySelectorAll('.layer');
  layers.forEach(layer => {
    const speed = layer.dataset.speed || 0.5;
    const yPos = window.pageYOffset * speed;
    layer.style.transform = `translateY(${yPos}px)`;
  });
});