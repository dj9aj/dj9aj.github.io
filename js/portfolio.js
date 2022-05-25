const elements = {
    aboutHeading: document.querySelector('.about-heading'),
    aboutHr: document.querySelector('.about-hr'),
    contactHeading: document.querySelector('.contact-heading'),
    contactHr: document.querySelector('.contact-hr'),
    links: document.getElementsByClassName("navbar__link"),
    navBar: document.querySelector('.navbar'),
    skill: document.querySelectorAll('.skill'), 
    skillsHeading: document.querySelector('.skills-heading'),
    skillsHr: document.querySelector('.skills-hr'),
    toggle: document.getElementById('toggle'),
    workHeading: document.querySelector('.work-heading'),
    workHr: document.querySelector('.work-hr')
}


const animateElements = () => {

    const scrollPosY = window.pageYOffset | document.body.scrollTop;
    
    // Start About section animation
    if (scrollPosY > 190) {
        elements.aboutHeading.classList.add('animateFromLeft');
        elements.aboutHr.classList.add('animateFromRight'); 
    } 

    // Start Skills section animation
    if (scrollPosY > 800) {
        elements.skillsHeading.classList.add('animateFromLeft');
        elements.skillsHr.classList.add('animateFromRight');  
    }
    
    // Start skills flip animation
    const skills = Array.from(elements.skill);
    if (scrollPosY > 1000) {
        skills.forEach(skill => {
            skill.classList.add('flipRound'); 
        });
    }

    // Start Work section animation
    if (scrollPosY > 1600) {
        elements.workHeading.classList.add('animateFromLeft');
        elements.workHr.classList.add('animateFromRight'); 
    }    
    
    // Start Contact section animation
    if (scrollPosY > 5200) {
        elements.contactHeading.classList.add('animateFromLeft');
        elements.contactHr.classList.add('animateFromRight'); 
    }  
}


const changeNav = () => {
    
    const scrollPosY = window.pageYOffset | document.body.scrollTop;
    
    // Hide phone nav when user scrolls
    elements.navBar.id = 'navbar-phone-hidden';  
    
    // Remove fixed navbar
    if (scrollPosY <= 400) {
        elements.navBar.classList.remove('fixed'); 
    }

    // Add fixed navbar
    if (scrollPosY > 500) {
        elements.navBar.classList.add('fixed');
    }      
}


const hideNavOnScroll = () => {
    
    let isScrolling;
    // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout( () => {
        // Fix nav to screen when user stops scrolling
        elements.navBar.id = 'navbar-phone-fixed';
    }, 66); 
}


const checkNavLinks = () => {
    // Remove navbar dropdown if hamburger is not checked
    Array.from(elements.links).forEach( el => {
        el.addEventListener('click', e => {
            elements.toggle.checked = false;
        });
    });
}

checkNavLinks();


// Remove navbar when user clicks away
const hideNavOnClick = event => {
    // If user clicks inside nav, return
    if (event.target.closest('.navbar')) return;

    // If user clicks outside the nav, hide dropdown
    elements.toggle.checked = false; 
}


// Listen for scroll events
window.addEventListener('scroll', event => {
    changeNav();
    animateElements();
    hideNavOnScroll();  
});


// Listen for click or touch events
['click','ontouchstart'].forEach(evt => 
    window.addEventListener(evt, hideNavOnClick, false)
);