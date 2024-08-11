import './style.css';

export function mainProjectsProject(element: ProjectData) {
    let projectItem = document.createElement('a');
    projectItem.classList.add('project-item');

    projectItem.href = element.link;
    projectItem.target = '_blank';

    let screen = document.createElement('img');
    screen.classList.add('screen');
    screen.src = element.image;

    let screenTitle = document.createElement('div');
    screenTitle.classList.add('screen-title');
    screenTitle.innerText = element.title;

    projectItem.appendChild(screen);
    projectItem.appendChild(screenTitle);

    return projectItem;
}
