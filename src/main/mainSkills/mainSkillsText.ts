import './style.css';

export function mainSkillsText() {
    let mainSkillsText = document.createElement('div');
    mainSkillsText.classList.add('main-skills-text');
    let mainSkillsTextGreet = document.createElement('div');
    mainSkillsTextGreet.innerText = 'Skills';
    mainSkillsTextGreet.classList.add('main-skills-text-greet');
    let mainSkillsTextName = document.createElement('h2');
    mainSkillsTextName.innerText = 'What I am capable of?';

    mainSkillsText.appendChild(mainSkillsTextGreet);
    mainSkillsText.appendChild(mainSkillsTextName);
    return mainSkillsText;
}

mainSkillsText();