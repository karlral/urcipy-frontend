

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

/*const typed = new Typed('.multiple-text',  {
    strings: ['Cross Country (XC)','Cross Country Maratón (XCM)', 'Cross Country Olímpico (XCO)', 'Cross Country Eliminator (XCE)'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
 });*/