import { mainHomeText } from "./mainHomeText";
import { createButton } from "./mainHomeTextBtn";
import './style.css';

export function mainHomeTextContainer() {
    let mainHomeTextContainer = document.createElement('div');
    mainHomeTextContainer.classList.add('main-home-text-container');
    mainHomeTextContainer.appendChild(mainHomeText());
    let mainHomeTextBtn = createButton('My CV');

    mainHomeTextBtn.addEventListener('click', function () {
        const linkUrl = 'CV-Iana-Sidneva.pdf'

        window.open(linkUrl, '_blank');
    });
    mainHomeTextContainer.appendChild(mainHomeTextBtn);
    return mainHomeTextContainer;
}

mainHomeTextContainer();