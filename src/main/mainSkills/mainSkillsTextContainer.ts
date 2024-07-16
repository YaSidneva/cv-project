import { mainSkillsText } from "./mainSkillsText";

export function mainSkillsTextContainer() {
    let mainSkillsTextContainer = document.createElement('div');
    mainSkillsTextContainer.classList.add('main-skills-text-container');
    mainSkillsTextContainer.appendChild(mainSkillsText());

    return mainSkillsTextContainer;
}

mainSkillsTextContainer();