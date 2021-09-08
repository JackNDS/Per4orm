const header = document.querySelector('header');
const sectionOne = document.querySelector('.home-intro');
const sectionTwo = document.querySelector('.section-2');
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');
const loadText = document.querySelector('.loading-text')

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav_center');
  const navLinks = document.querySelectorAll('.nav_center li');
  //Toggle Nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.5}s`;
      }
    });
  });
  //Animate Links
};

navSlide();

const sectionOneOptions = {
  rootMargin: '-130px 0px 0px 0px'
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add('nav-scrolled');
    } else {
      header.classList.remove('nav-scrolled');
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const appearOptions = {
  threshold: 0,
  rootMargin: '0px 0px -250px 0px'
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});

/* Loading Screen */

let load = 0

let int = setInterval(blurring, 30)

function blurring(){
  load++

    if(load > 99){
      clearInterval(int)
    }

    loadText.innerHTML = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    sectionOne.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}