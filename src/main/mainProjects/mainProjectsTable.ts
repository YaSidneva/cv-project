import { mainProjectsProject } from "./mainProjectsProject";
import './style.css';

export function mainProjectsTable() {
    let mainProjectsTable = document.createElement('div');
    mainProjectsTable.classList.add('main-projects-table');

    mainProjectsTable.appendChild(mainProjectsProject('screen1.png', 'CV'));
    mainProjectsTable.appendChild(mainProjectsProject('', ''));
    mainProjectsTable.appendChild(mainProjectsProject('', ''));

    return mainProjectsTable;
}

mainProjectsTable();