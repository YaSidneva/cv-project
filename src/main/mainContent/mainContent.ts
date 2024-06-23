import { mainHome } from '../mainHome/mainHome';
import './style.css';

export function mainContent() {
    let mainContent = document.createElement('div');
    mainContent.classList.add('main-content');
    mainContent.appendChild(mainHome());
    return mainContent;
}

mainContent();