"use strict";
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const navEvents = document.getElementsByClassName('nav-events');
menuBtn.onclick = function () {
    if (navLinks.classList.contains('hidden')) {
        navLinks.classList.add('flex');
        navLinks.classList.remove('hidden');
        setTimeout(() => {
            navLinks.style.opacity = '1';
        });
    }
    else {
        navLinks.style.opacity = '0';
        setTimeout(() => {
            navLinks.classList.add('hidden');
            navLinks.classList.remove('flex');
        });
    }
};
function toggleEvents(e) {
    if (e.getAttribute('icon') === 'mingcute:left-fill') {
        e.setAttribute('icon', 'mingcute:down-fill');
        for (let i = 0; i < navEvents.length; i++) {
            navEvents[i].classList.add('flex');
            navEvents[i].classList.remove('hidden');
        }
    }
    else {
        e.setAttribute('icon', 'mingcute:left-fill');
        for (let i = 0; i < navEvents.length; i++) {
            navEvents[i].classList.add('hidden');
            navEvents[i].classList.remove('flex');
        }
    }
}
