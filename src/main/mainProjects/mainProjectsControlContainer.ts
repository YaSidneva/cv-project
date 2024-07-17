import { mainProjectsController } from "./mainProjectsController";
import './style.css';

export function mainProjectsControlContainer() {
    let controllers = document.createElement('div');
    controllers.classList.add('controllers');

    let arrowPrev = controllers.appendChild(mainProjectsController());
    arrowPrev.classList.add('arrow-prev');

    let arrowNext = controllers.appendChild(mainProjectsController());
    arrowNext.classList.add('arrow-next');
    return controllers;
}

mainProjectsControlContainer();