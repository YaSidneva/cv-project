import { createBurgerMenu } from './headerBurgerMenu';
import { headerNavBar } from './headerNavBar';
import './style.css';

export function header() {
    let header = document.createElement('div');
    header.classList.add('header');
    header.id = 'header';

    let headerLogo = document.createElement('img');
    headerLogo.classList.add('header-logo');
    headerLogo.setAttribute("src", "/logo.png");
    header.appendChild(headerLogo);

    // header.appendChild(headerNavBar());
    // let burgerMenu = header.appendChild(createBurgerMenu());
    let burgerMenu = header.appendChild(createBurgerMenu());
    let normalMenu = header.appendChild(headerNavBar());


    const updateMenuDisplay = () => {
        if (window.innerWidth < 800) {
            burgerMenu.style.display = 'flex';
            normalMenu.style.display = 'none';
        } else {
            burgerMenu.style.display = 'none';
            normalMenu.style.display = 'flex';
        }
    };

    window.addEventListener('resize', updateMenuDisplay);
    document.addEventListener('DOMContentLoaded', updateMenuDisplay);

    return header;
}
document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(header());
});