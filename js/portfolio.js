// var nav = new Waypoint({
//     element: document.querySelector('.navbar-fixed'),
//     handler: function () {
//       console.log('Basic waypoint triggered');
//       this.element.classList.add("active");
//     }
//   })

const scrollPosY = window.pageYOffset | document.body.scrollTop;
const body = document.querySelector("#body");
const navBar = document.querySelector('.navbar');
const aboutHeading = document.querySelector('.about-heading');
const aboutHr = document.querySelector('.about-hr');
const skillsHeading = document.querySelector('.skills-heading');
const skillsHr = document.querySelector('.skills-hr');
const skill = document.querySelectorAll('.skill');
const workHeading = document.querySelector('.work-heading');
const workHr = document.querySelector('.work-hr');
const contactHeading = document.querySelector('.contact-heading');
const contactHr = document.querySelector('.contact-hr');

const skills = Array.from(document.querySelectorAll('.skill'));

// body.onscoll = function changeClass() {
//     nav.classList.add('.active');
// }

window.onscroll = function changeNav(){
    const scrollPosY = window.pageYOffset | document.body.scrollTop;
    // alert(window.scrollY);

    if(scrollPosY > 800) {
        navBar.classList.add('active');
        skillsHeading.classList.add('animateFromLeft');
        skillsHr.classList.add('animateFromRight');  
         
    }
    
    if(scrollPosY > 1000) {
        skills.forEach(skill => {
            skill.classList.add('flipRound'); 
        });
    }

    if (scrollPosY > 1600) {
        workHeading.classList.add('animateFromLeft');
        workHr.classList.add('animateFromRight'); 
    }    

    
    if (scrollPosY > 190) {
        aboutHeading.classList.add('animateFromLeft');
        aboutHr.classList.add('animateFromRight'); 
    }  
    if (scrollPosY > 5200) {
        contactHeading.classList.add('animateFromLeft');
        contactHr.classList.add('animateFromRight'); 
    }  

    if(scrollPosY <= 400) {
        navBar.classList.remove('active'); 
    } 
    
    // else if ()
}

const elements = document.getElementsByClassName("navbar__link");
const toggle = document.getElementById('toggle');


Array.from(elements).forEach(el => {
    el.addEventListener('click', e => {
        toggle.checked = false;
    })
})


