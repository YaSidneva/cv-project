import { headerNavBarElement } from "./headerNavBarElement";

export function createBurgerMenu(): HTMLElement {
    const menuIcon = document.createElement('div');
    menuIcon.classList.add('menu-icon');
    menuIcon.id = 'menuIcon';
    let burgerLine1 = document.createElement('div');
    let burgerLine3 = document.createElement('div');
    let burgerLine2 = document.createElement('div');

    menuIcon.appendChild(burgerLine1).classList.add('bar1');
    menuIcon.appendChild(burgerLine3).classList.add('bar3');
    menuIcon.appendChild(burgerLine2).classList.add('bar2');


    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.id = 'overlay';
    let overlayContent = document.createElement('div');
    overlayContent.classList.add('overlay-content');
    overlay.appendChild(overlayContent);

    overlayContent.appendChild(headerNavBarElement('Home', '#home'));
    overlayContent.appendChild(headerNavBarElement('About', '#about'));
    overlayContent.appendChild(headerNavBarElement('Skill', '#skills'));
    overlayContent.appendChild(headerNavBarElement('Projects', '#projects'));
    overlayContent.appendChild(headerNavBarElement('Contacts', '#contacts'));

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
        overlay.classList.toggle('show');

        if (overlay.classList.contains('show')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    overlay.addEventListener('click', () => {
        overlay.classList.remove('show');
    })

    const burgerContainer = document.createElement('div');
    burgerContainer.appendChild(menuIcon);
    burgerContainer.appendChild(overlay);

    return burgerContainer;
}
