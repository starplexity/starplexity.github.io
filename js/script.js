// Burger Menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
});

// Slider
let slides = document.querySelectorAll('.slide');
let current = 0;
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

function showSlide(index) {
  slides.forEach(s => s.classList.remove('active'));
  slides[index].classList.add('active');
}

next.addEventListener('click', () => {
  current = (current+1)%slides.length;
  showSlide(current);
});
prev.addEventListener('click', () => {
  current = (current-1+slides.length)%slides.length;
  showSlide(current);
});

// Auto slider every 5 seconds
setInterval(()=>{ current=(current+1)%slides.length; showSlide(current); },5000);

// ParticlesJS
particlesJS("particles-js", {
  "particles": {
    "number": {"value":50,"density":{"enable":true,"value_area":800}},
    "color":{"value":"#00ffff"},
    "shape":{"type":"circle"},
    "opacity":{"value":0.5,"random":true},
    "size":{"value":3,"random":true},
    "line_linked":{"enable":false},
    "move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false}
  },
  "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"}},"modes":{"grab":{"distance":150,"line_linked":{"opacity":0.5}},"push":{"particles_nb":4}}}
});
