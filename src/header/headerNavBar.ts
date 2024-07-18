import { headerNavBarElement } from './headerNavBarElement';
import './style.css';

export function headerNavBar() {
    let headerNavBar = document.createElement('div');
    headerNavBar.classList.add('header-nav-bar');

    headerNavBar.appendChild(headerNavBarElement('Home', '#home'));
    headerNavBar.appendChild(headerNavBarElement('About', '#about'));
    headerNavBar.appendChild(headerNavBarElement('Skill', '#skills'));
    headerNavBar.appendChild(headerNavBarElement('Projects', '#projects'));
    headerNavBar.appendChild(headerNavBarElement('Contacts', '#contacts'));


    return headerNavBar;
}

headerNavBar();
