import { footer } from './footer/footer';
import './global.css';
import { header } from './header/header';
import { mainContent } from './main/mainContent/mainContent';
export function mainPage() {
    let mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');
    document.querySelector("body")?.appendChild(mainContainer);

    mainContainer.appendChild(header());
    mainContainer.appendChild(mainContent());
    mainContainer.appendChild(footer());
}

mainPage();