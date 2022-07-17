document.documentElement.setAttribute("data-js-enabled", true);

let root = document.documentElement;
let primaryNav = document.querySelector(".primary-navigation");
let menuToggle = document.querySelector(".menu-toggle");

let bpPhone = 20; //rem
let bpTablet = 39; //rem
let bpMonitor = 57; //rem
let bpJumbo = 80; //rem



function closeNavigation() {
    menuToggle.setAttribute('aria-expanded', false);
    primaryNav.setAttribute('data-visible', false);
}
function openNavigation() {
    menuToggle.setAttribute('aria-expanded', true);
    primaryNav.setAttribute('data-visible', true);
    primaryNav.setAttribute('data-animate', true);
}
function toggleNavigation() {
    let isMenuExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    if (isMenuExpanded) {
        closeNavigation();
    } else {
        openNavigation();
    }
}

menuToggle.addEventListener("click", toggleNavigation);
primaryNav.querySelectorAll("li").forEach(e => {
    e.addEventListener("click", closeNavigation);
});


function onClientResize() {
    let rootStyles = window.getComputedStyle(root);
    let rootFontSize = parseInt(rootStyles.getPropertyValue('font-size'));
    
    let clientWidthInPixels = root.clientWidth;
    let clientWidthInRems = clientWidthInPixels / rootFontSize;
    
    root.style.setProperty('--client-width', clientWidthInRems);

    if (clientWidthInRems > bpTablet) {
        closeNavigation();
        primaryNav.setAttribute('data-animate', false);
    }
}


onClientResize();
window.addEventListener("resize", onClientResize);

