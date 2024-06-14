import './global.css';
import { header } from './header/header';
export function mainPage() {
    let mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');
    document.querySelector("body")?.appendChild(mainContainer);

    mainContainer.appendChild(header());
}

mainPage();