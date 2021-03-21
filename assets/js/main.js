/* Show Menu */

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    //Valdate that varibale exist
    if(toggle && nav) {
        //Added the show-menu class to the div tag with the nav__menu class
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

/* Remove Menu Mobile */ 

const navlink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When clicked on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navlink.forEach(n => n.addEventListener('click', linkAction))

/* Scroll Sections Active Link */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageXOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scroll > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })

}
window.addEventListener('scroll', scrollActive)

/* Change Background Header */

function scrollHeader(){
    const nav = document.getElementById('header')
    //When the scroll is greater than 200 viewport height, add the sroll header class to the header tag
    if(this.scroll >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* Show Scroll Top */

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    //When the scroll is higher then 560 viewport height, add the show scroll class to the a tag with the scroll-top class 
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/* Dark Light Theme */