export function mainProjectsText() {
    let mainProjectsText = document.createElement('div');
    mainProjectsText.classList.add('main-projects-text');
    let mainProjectsTextGreet = document.createElement('div');
    mainProjectsTextGreet.innerText = 'Projects';
    mainProjectsTextGreet.classList.add('main-projects-text-greet');
    let mainProjectsTextName = document.createElement('h2');
    mainProjectsTextName.innerText = 'What I have made?';

    mainProjectsText.appendChild(mainProjectsTextGreet);
    mainProjectsText.appendChild(mainProjectsTextName);
    return mainProjectsText;
}

mainProjectsText();