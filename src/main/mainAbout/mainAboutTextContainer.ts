import { mainAboutText } from "./mainAboutTetx";

export function mainAboutTextContainer() {
    let mainAboutTextContainer = document.createElement('div');
    mainAboutTextContainer.classList.add('main-about-text-container');
    mainAboutTextContainer.appendChild(mainAboutText());
    return mainAboutTextContainer;
}

mainAboutTextContainer();