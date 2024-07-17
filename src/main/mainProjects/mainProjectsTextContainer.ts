import { mainProjectsText } from "./mainPojectsText";

export function mainProjectsTextContainer() {
    let mainProjectsTextContainer = document.createElement('div');
    mainProjectsTextContainer.classList.add('main-project-text-container');
    mainProjectsTextContainer.appendChild(mainProjectsText());
    return mainProjectsTextContainer;
}

mainProjectsTextContainer();