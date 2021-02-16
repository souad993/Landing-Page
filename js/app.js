/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

// Initiate Global Variables
const navbar = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const GoToTOpButton = document.getElementById("scrollTop");

/**
 * End Global Variables
 * Start Helper Functions
 *
 * */

//Start the function
const SectionPosition = (section) => {
  //TODO: return the size AND the realative position of the element
  return Math.floor(section.getBoundingClientRect().top);
};
// End of the Function

//Start the function
const ADDActiveSection = (conditional, section) => {
  //TODO: if ( false ) remove the active class
  if (!conditional) {
    section.classList.remove("your-active-class");
  } else {
    //TODO: if ( True ) Add the active class
    section.classList.add("your-active-class");
  }
};
// End of the Function

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

//Start the function
const navcreator = () => {
  // TODO: Clearing the navBar contanier
  let NavContainer = "";
  //TODO: Looping through each section
  sections.forEach((section) => {
    const sectionName = section.getAttribute("data-nav");
    const sectionid = section.getAttribute("id");
    //TODO: Create li Elements for each section
    const listElement = document.createElement("li");
    //TODO: Add text for each nav section
    listElement.innerHTML = `<a class='menu__link' href='#${sectionid}'>${sectionName}</a>`;
    //TODO: Add the Elements to the nav selector
    navbar.appendChild(listElement);
  });
};
// End of the Function

// Add class 'active' to section when near top of viewport

//Start the function
const IsActive = () => {
  sections.forEach((section) => {
    const elementOffset = SectionPosition(section);
    inviewport = () => elementOffset < 200 && elementOffset >= -200;
    // TODO:Calling the function
    ADDActiveSection(inviewport(), section);
  });
};
// End of the Function

// Scroll to anchor ID using scrollTO event

//Start the function
function ScrollTopButton() {
  GoToTOpButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      //TODO: set the scroll behavior as sooth
      behavior: "smooth",
    });
  });
}
// End of the Function

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

//calling the Main functions
navcreator();

window.addEventListener("scroll", IsActive);

ScrollTopButton();
