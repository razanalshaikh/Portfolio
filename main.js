//Toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Scroll section

let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () =>{
   sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute ('id');
    if(top >= offset && top < offset+height){
        navLinks.forEach.apply(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a[herf*=' + id + ']').classList.add('active');
        });
    }
   }); 
   // sticky navbar
 let header = document.querySelector('header');
 header.classList.toggle('sticky', Window.scrollY >100);
   // remove toggle icon and navbar
   menuIcon.classList.remove('fa-xmark');
   navbar.classList.remove('active');
};

// scroll reveal  
ScrollReveal({ 
    distance: '80px',
    duration:2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img .services-container, .porfolio-box, .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
/* 
const typed = new Typed('.multiple-text'),{
strings:['Software Engineer', 'web developer', 'UI UX Designer'],
}*/
