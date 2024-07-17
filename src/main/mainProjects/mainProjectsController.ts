import { createArrow } from "./mainProjectsControllerArrow";
import './style.css';

export function mainProjectsController() {
    let controller = document.createElement('div');
    controller.classList.add('controller');

    let controllerContainer = document.createElement('div');
    controllerContainer.classList.add('controller-container');

    controller.appendChild(controllerContainer);
    controllerContainer.appendChild(createArrow());
    return controller;
}