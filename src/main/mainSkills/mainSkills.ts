import { mainSkillsImgContainer } from "./mainSkillsImgContainer";
import { mainSkillsTextContainer } from "./mainSkillsTextContainer";

export function mainSkills() {
    let skills = document.createElement('div');
    skills.classList.add('skills');
    skills.id = 'skills';
    skills.appendChild(mainSkillsTextContainer());
    skills.appendChild(mainSkillsImgContainer());

    return skills;
}

mainSkills();