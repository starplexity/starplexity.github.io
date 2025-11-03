// Burger Menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('header nav');
burger.addEventListener('click', () => nav.classList.toggle('active'));

// Slider
let slides = document.querySelectorAll('.slide');
let current = 0;
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

function showSlide(index){
  slides.forEach(slide => slide.style.display = 'none');
  slides[index].style.display = 'flex';
}
showSlide(current);

nextBtn.addEventListener('click', () => {
  current = (current+1) % slides.length;
  showSlide(current);
});
prevBtn.addEventListener('click', () => {
  current = (current-1+slides.length) % slides.length;
  showSlide(current);
});

// Auto Slide
setInterval(()=>{
  current = (current+1) % slides.length;
  showSlide(current);
},5000);
