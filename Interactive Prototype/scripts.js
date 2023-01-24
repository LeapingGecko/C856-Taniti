'use strict';

document.querySelectorAll('div[data-hyper]')
.forEach(el => el.addEventListener('click', createHyperlink));

document.querySelectorAll('a[data-submenu]')
.forEach(el => el.addEventListener('mouseover', show_submenu));

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
