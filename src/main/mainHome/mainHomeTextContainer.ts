import { mainHomeText } from "./mainHomeText";
import { createButton } from "./mainHomeTextBtn";
import './style.css';

export function mainHomeTextContainer() {
    let mainHomeTextContainer = document.createElement('div');
    mainHomeTextContainer.classList.add('main-home-text-container');
    mainHomeTextContainer.appendChild(mainHomeText());
    let mainHomeTextBtn = createButton('My CV');
    mainHomeTextContainer.appendChild(mainHomeTextBtn);
    return mainHomeTextContainer;
}

mainHomeTextContainer();