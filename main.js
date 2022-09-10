
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const navClose = document.querySelector(".icon-close");
const navOpen = document.querySelector(".icon-hamburger");
const parallaxBackground = document.getElementById("parallax-wrapper")

// Navigation

navToggle.addEventListener("click", myMenu, false);

function myMenu(){

   navOpen.toggleAttribute("data-invisible");
   navClose.toggleAttribute("data-visible");
   primaryNav.toggleAttribute("data-visible");
   
}

// Achievement parallax

window.addEventListener("scroll", function(){
   

   let divOffset = parallaxBackground.offsetTop - ((2*this.window.innerHeight) / 3);
   let offset = window.pageYOffset - divOffset;
   parallaxBackground.style.backgroundPositionY = "-" + (offset * 0.7 ) + "px"
})

// Slider

const slider = new A11YSlider(document.querySelector('.slider'), {
        adaptiveHeight: false,
        dots: true,
        arrows: false,
      });

// Slide in

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});