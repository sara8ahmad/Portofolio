let header = document.querySelector("header");
let navbar = document.querySelector(".navbar");



const navbarHeight = navbar.offsetHeight;

// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
  // Get the current scroll position of the window
  const scrollPosition = window.scrollY;

  // If the scroll position is greater than the height of the navbar, add a background color to the navbar
  if (scrollPosition > navbarHeight) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});             

// Get all elements with the class "scroll-fade"
const scrollFades = document.querySelectorAll('.scroll-fade');

// Check if an element is in the viewport
const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Loop through all the elements with the class "scroll-fade"
const checkScrollFades = () => {
  for (let i = 0; i < scrollFades.length; i++) {
    const scrollFade = scrollFades[i];
    if (isInViewport(scrollFade)) {
      scrollFade.style.opacity = '1';
    }
  }
};

// Listen for scroll events and check if any elements with the class "scroll-fade" are in the viewport
window.addEventListener('scroll', checkScrollFades);


function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}


