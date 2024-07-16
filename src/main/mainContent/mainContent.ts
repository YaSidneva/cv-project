import { mainAbout } from '../mainAbout/mainAbout';
import { mainHome } from '../mainHome/mainHome';
import { mainSkills } from '../mainSkills/mainSkills';
import './style.css';

export function mainContent() {
    let mainContent = document.createElement('div');
    mainContent.classList.add('main-content');
    mainContent.appendChild(mainHome());
    mainContent.appendChild(mainAbout());
    mainContent.appendChild(mainSkills());
    return mainContent;
}

mainContent();