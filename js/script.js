// Burger Menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('header nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Slider
let slides = document.querySelectorAll('.slide');
let current = 0;
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

function showSlide(index){
    slides.forEach((slide,i)=> slide.classList.remove('active'));
    slides[index].classList.add('active');
}

nextBtn.addEventListener('click',()=>{
    current = (current+1) % slides.length;
    showSlide(current);
});
prevBtn.addEventListener('click',()=>{
    current = (current-1+slides.length) % slides.length;
    showSlide(current);
});

// Auto slide every 5s
setInterval(()=>{
    current = (current+1) % slides.length;
    showSlide(current);
},5000);

// Particles.js background
particlesJS.load('particles-js', 'js/particles.json', function() {
  console.log('particles loaded');
});
