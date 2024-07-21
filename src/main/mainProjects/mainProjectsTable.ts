import { mainProjectsProject } from "./mainProjectsProject";
import './style.css';

export function mainProjectsTable() {
    let mainProjectsTable = document.createElement('div');
    mainProjectsTable.classList.add('main-projects-table');

    let leftSlide = mainProjectsTable.appendChild(mainProjectsProject('screen1.png', 'CV'));
    leftSlide.classList.add('left-slide');
    // leftSlide.style.opacity = "0";

    let centralSlide = mainProjectsTable.appendChild(mainProjectsProject('screen1.png', 'CV1'));
    centralSlide.classList.add('central-slide');
    // centralSlide.style.opacity = '1';

    let rightSlide = mainProjectsTable.appendChild(mainProjectsProject('screen1.png', 'CV2'));
    rightSlide.classList.add('right-slide');
    // rightSlide.style.opacity = "0";

    return mainProjectsTable;
}

mainProjectsTable();