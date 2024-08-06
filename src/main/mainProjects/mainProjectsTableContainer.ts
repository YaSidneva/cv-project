import { mainProjectsControlContainer } from "./mainProjectsControlContainer";
import { mainProjectsTable } from "./mainProjectsTable";
import './style.css';

export function mainProjectsTableContainer() {
    let mainProjectsTableContainer = document.createElement('div');
    mainProjectsTableContainer.classList.add('main-projects-table-container');
    let sliderTable = mainProjectsTableContainer.appendChild(mainProjectsTable());
    mainProjectsTableContainer.appendChild(mainProjectsControlContainer(sliderTable));

    return mainProjectsTableContainer;
}

mainProjectsTableContainer();