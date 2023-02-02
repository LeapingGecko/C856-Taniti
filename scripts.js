'use strict';

document.querySelectorAll('div[data-hyper]')
.forEach(el => el.addEventListener('click', createHyperlink));

document.querySelectorAll('a[data-submenu]')
.forEach(el => el.addEventListener('mouseover', show_submenu));

document.querySelectorAll('.accordion > h2')
.forEach(el => el.addEventListener('click', accordion));

function show_submenu(event) {
    let over = event.currentTarget.dataset.submenu;
    document.querySelectorAll(`nav#secondary-nav a:not(.${over})`)
    .forEach(el => el.classList.add('hide'));
    document.querySelectorAll(`nav#secondary-nav a.${over}`)
    .forEach(el => el.classList.remove('hide'));
}

function createHyperlink(event) {
    let link = event.currentTarget.dataset.hyper;
    document.location.href = link;
}

function accordion(event) {
    let section = event.currentTarget.parentNode;
    let panel = section.querySelector('div.panel');
    let plus = event.currentTarget.querySelector('span.plus');
    if (!panel.style.maxHeight) {
        panel.style.maxHeight = panel.scrollHeight + "px";
        plus.innerText = "-";
    } else {
        panel.style.maxHeight = null;
        plus.innerText = "+";
    }
    
    
}