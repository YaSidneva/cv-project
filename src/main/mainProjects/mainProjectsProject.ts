import './style.css';

export function mainProjectsProject(src: string, title: string) {
    let projectItem = document.createElement('a');
    projectItem.classList.add('project-item');

    let screen = document.createElement('img');
    screen.classList.add('screen');
    screen.src = src;

    let screenTitle = document.createElement('div');
    screenTitle.classList.add('screen-title');
    screenTitle.innerText = title;

    projectItem.appendChild(screen);
    projectItem.appendChild(screenTitle);

    return projectItem;
}
