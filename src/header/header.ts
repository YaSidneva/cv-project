import './style.css';

export function header() {
    let header = document.createElement('div');
    header.classList.add('header');
    let headerLogo = document.createElement('div');
    headerLogo.classList.add('header-logo');
    header.appendChild(headerLogo);

    let headerMenu = document.createElement('div');
    headerMenu.classList.add('header-menu');
    header.appendChild(headerMenu);

    return header;
}

header();