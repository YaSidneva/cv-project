import { mainProjectsTableContainer } from "./mainProjectsTableContainer";
import { mainProjectsTextContainer } from "./mainProjectsTextContainer";
import './style.css';

export function mainProjects() {
    let projects = document.createElement('div');
    projects.classList.add('projects');
    projects.appendChild(mainProjectsTextContainer());
    projects.appendChild(mainProjectsTableContainer());
    return projects;
}

mainProjects();