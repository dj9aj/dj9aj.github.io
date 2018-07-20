// var nav = new Waypoint({
//     element: document.querySelector('.navbar-fixed'),
//     handler: function () {
//       console.log('Basic waypoint triggered');
//       this.element.classList.add("active");
//     }
//   })

const body = document.querySelector("#body");
const navBar = document.querySelector('.navbar');
const scrollPosY = window.pageYOffset | document.body.scrollTop;

// body.onscoll = function changeClass() {
//     nav.classList.add('.active');
// }

window.onscroll = function changeNav(){
    const scrollPosY = window.pageYOffset | document.body.scrollTop;

    if(scrollPosY > 800) {
        navBar.classList.add('active');

    } else if(scrollPosY <= 400) {
        navBar.classList.remove('active'); 
    } 
}


// var aboutSection = document.querySelector('.section-about');


