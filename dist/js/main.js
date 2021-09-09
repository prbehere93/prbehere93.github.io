
const menuBtn=document.querySelector('.menu-btn'); //selecting the class of btn-menu
const menu=document.querySelector('.menu');
const menuNav=document.querySelector('.menu-nav');
const menuBranding=document.querySelector('.menu-branding');
const navItems=document.querySelectorAll('.nav-item'); //selecting all the nav links

//set the initial state of the menu
let showMenu= false;

menuBtn.addEventListener('click',toggleMenu);

function toggleMenu() {
    console.log('clicked')
    if(showMenu==false){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show')); //loops through all the navlinks
        showMenu=true;
    }
    else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show')); //loops through all the navlinks
        showMenu=false;
    }
}