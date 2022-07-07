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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const menuList = document.getElementById('navbar__list');
const navSection = document.querySelectorAll('section');
const navMenu = document.querySelector('.navbar__menu');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function createMenu(){
  // loop for each element in the section
    navSection.forEach(el => {
        const listedNav = document.createElement('li');
        //li inserted
        listedNav.insertAdjacentHTML("beforeend",`<a href="#${el.id}" class="menu__link">${el.dataset.nav}</a>`);
        //child appended
        menuList.appendChild(listedNav);
        scrollBehavior(listedNav, el);
    });
    navMenu.appendChild(menuList);
}
//  call function
createMenu();

// Add class 'active' to section when near top of viewport
function viewPortSection (){
  const activeNavigation = document.querySelectorAll(".menu__link")
  navSection.forEach((section, n)=>{
      //I learn this section from this link https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp
      const sectionBond = section.getBoundingClientRect();
      //check viewport section
      if (sectionBond.top <= 300 && sectionBond.bottom >= 300){
          section.classList.add("your-active-class");
          // indicator or active class
          activeNavigation[n].classList.add("link__active");
      } else{
          section.classList.remove("your-active-class");
          activeNavigation[n].classList.remove("link__active");
      }
  })
}
// Scroll to anchor ID using scrollTO event
// smooth scroll
function scrollBehavior(listedNav, el){
  listedNav.addEventListener('click', function(call){
      call.preventDefault();
      window.scrollTo({top: el.offsetTop,behavior:"smooth"});
  });
}

// call function
window.addEventListener('scroll',(call)=>{
  viewPortSection();
})


/**
 * End Main Functions
 * Begin Events
 * 
*/


