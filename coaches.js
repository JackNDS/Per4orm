const header = document.querySelector('header');
const sectionOne = document.querySelector('.coaches-section-one');
const sectionTwo = document.querySelector('.section-2');
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');


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
  rootMargin: '-180px 0px 0px 0px'
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
  rootMargin: '0px 0px -220px 0px'
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

//Expanding Coach Information

const shannon = document.querySelector('.shannon');
const coach1 = document.querySelector('.coach-1');
const chris = document.querySelector('.chris');
const coach2 = document.querySelector('.coach-2');
const brad = document.querySelector('.brad');
const coach3 = document.querySelector('.coach-3');
const peter = document.querySelector('.peter');
const coach4 = document.querySelector('.coach-4');
const james = document.querySelector('.james');
const coach5 = document.querySelector('.coach-5');
const lynda = document.querySelector('.lynda');
const coach6 = document.querySelector('.coach-6');
const sam = document.querySelector('.sam');
const coach7 = document.querySelector('.coach-7');
const closeBtn1 = document.querySelector('.button-close');
const closeBtn2 = document.querySelector('.button-close2');
const closeBtn3 = document.querySelector('.button-close3');
const closeBtn4 = document.querySelector('.button-close4');
const closeBtn5 = document.querySelector('.button-close5');
const closeBtn6 = document.querySelector('.button-close6');
const closeBtn7 = document.querySelector('.button-close7');

shannon.addEventListener('click', () => {
  coach1.classList.add('active');
});
closeBtn1.addEventListener('click', () => {
  coach1.classList.remove('active');
});
window.onclick = function(one) {
  if (one.target == coach1) {
    coach1.classList.remove('active');
  }
}

chris.addEventListener('click', () => {
  coach2.classList.add('active');
});
chris.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth'});
closeBtn2.addEventListener('click', () => {
  coach2.classList.remove('active');
});
window.onclick = function(event) {
  if (event.target == coach2) {
    coach2.classList.remove('active');
  }
}

brad.addEventListener('click', () => {
  coach3.classList.add('active');
});
brad.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth'});
closeBtn3.addEventListener('click', () => {
  coach3.classList.remove('active');
});
window.onclick = function(event) {
  if (event.target == coach3) {
    coach3.classList.remove('active');
  }
}

peter.addEventListener('click', () => {
  coach4.classList.add('active');
});
peter.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth'});
closeBtn4.addEventListener('click', () => {
  coach4.classList.remove('active');
});
window.onclick = function(event) {
  if (event.target == coach4) {
    coach4.classList.remove('active');
  }
}

james.addEventListener('click', () => {
  coach5.classList.add('active');
});
james.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth'});
closeBtn5.addEventListener('click', () => {
  coach5.classList.remove('active');
});
window.onclick = function(event) {
  if (event.target == coach5) {
    coach5.classList.remove('active');
  }
}

lynda.addEventListener('click', () => {
  coach6.classList.add('active');
});
lynda.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth'});
closeBtn6.addEventListener('click', () => {
  coach6.classList.remove('active');
});
window.onclick = function(event) {
  if (event.target == coach6) {
    coach6.classList.remove('active');
  }
}


sam.addEventListener('click', () => {
  coach7.classList.add('active');
});
sam.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth'});
closeBtn7.addEventListener('click', () => {
  coach7.classList.remove('active');
});
window.onclick = function(event) {
  if (event.target == coach7) {
    coach7.classList.remove('active');
  }
}

