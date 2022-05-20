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


/* Mobile Menu */
const btn = document.getElementById('menu-btn')

function navToggle() {
    btn.classList.toggle('open')
}

btn.addEventListener('click', navToggle)