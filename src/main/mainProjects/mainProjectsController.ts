import { createArrow } from "./mainProjectsControllerArrow";
import './style.css';

export function mainProjectsController(onBtnClick: (this: HTMLButtonElement, ev: MouseEvent) => any) {
    let controller = document.createElement('div');
    controller.classList.add('controller');


    let controllerBtn = document.createElement('button');
    controllerBtn.classList.add('controller-btn');
    controllerBtn.addEventListener('click', onBtnClick);

    controller.appendChild(controllerBtn);
    controllerBtn.appendChild(createArrow());
    return controller;
}