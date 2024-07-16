import { mainAbout } from '../mainAbout/mainAbout';
import { mainHome } from '../mainHome/mainHome';
import './style.css';

export function mainContent() {
    let mainContent = document.createElement('div');
    mainContent.classList.add('main-content');
    mainContent.appendChild(mainHome());
    mainContent.appendChild(mainAbout());
    return mainContent;
}

mainContent();