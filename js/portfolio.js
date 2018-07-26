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
    workHeading: document.querySelector('.work-heading'),
    workHr: document.querySelector('.work-hr')
}

const skills = Array.from(elements.skill);

window.onscroll = function changeNav(){
    const scrollPosY = window.pageYOffset | document.body.scrollTop;
    // Start About section animation
    if (scrollPosY > 190) {
        elements.aboutHeading.classList.add('animateFromLeft');
        elements.aboutHr.classList.add('animateFromRight'); 
    } 
    // Remove fixed navbar
    if(scrollPosY <= 400) {
        elements.navBar.classList.remove('fixed'); 
    } 
    // Add fixed navbar
    if(scrollPosY > 500) {
        elements.navBar.classList.add('fixed');
    }     
    // Start Skills section animation
    if(scrollPosY > 800) {
        elements.skillsHeading.classList.add('animateFromLeft');
        elements.skillsHr.classList.add('animateFromRight');  
    }
    // Start skills flip animation
    if(scrollPosY > 1000) {
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

    if (window.onscroll) {
        elements.navBar.classList.remove('fixed');  
    } 
}


const toggle = document.getElementById('toggle');

// Remove navbar dropdown if hamburger is not checked
Array.from(elements.links).forEach(el => {
    el.addEventListener('click', e => {
        toggle.checked = false;
    })
})

// Setup isScrolling variable
var isScrolling;

// Listen for scroll events
window.addEventListener('scroll', function ( event ) {
    var scrollPosY = window.pageYOffset | document.body.scrollTop;
	// Clear our timeout throughout the scroll
	window.clearTimeout( isScrolling );

	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {

        if (scrollPosY > 500) {
            // Run the callback
            console.log( 'Scrolling has stopped.' );
            elements.navBar.classList.add('fixed');
        }
		

	}, 66);

}, false);