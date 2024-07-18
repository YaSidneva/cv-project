import { headerNavBar } from './headerNavBar';
import './style.css';

export function header() {
    let header = document.createElement('div');
    header.classList.add('header');
    header.id = 'header';

    let headerLogo = document.createElement('img');
    headerLogo.classList.add('header-logo');
    headerLogo.setAttribute("src", "../public/logo.png");
    header.appendChild(headerLogo);

    header.appendChild(headerNavBar());

    return header;
}

header();