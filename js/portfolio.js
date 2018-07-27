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


window.addEventListener('scroll', event => {
    changeNav();
    removeNav();  
});


const changeNav = () => {
    
    const scrollPosY = window.pageYOffset | document.body.scrollTop;
    const skills = Array.from(elements.skill);

    // Hide phone nav when user scrolls
    elements.navBar.id = 'navbar-phone-hidden';  

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
}


const removeNav = () => {
    // Remove navbar dropdown if hamburger is not checked
    Array.from(elements.links).forEach( el => {
        el.addEventListener('click', e => {
            elements.toggle.checked = false;
        })
    })

    // Detect all clicks on the document
    window.addEventListener("click tap", function(event) {
        // If user clicks inside the nav, do nothing
        if (event.target.closest('.navbar')) return;

        // If user clicks outside the nav, hide dropdown
        elements.toggle.checked = false;
    });

    let isScrolling
    // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout( () => {
        // Fix nav to screen when user stops scrolling
        elements.navBar.id = 'navbar-phone-fixed';
    }, 66); 
}
