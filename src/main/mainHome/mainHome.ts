import { mainHomeImg } from './mainHomeImg';
import { mainHomeTextContainer } from './mainHomeTextContainer';
import './style.css';

export function mainHome() {
    let mainHomeContent = document.createElement('div');
    mainHomeContent.classList.add('main-home-content');
    mainHomeContent.appendChild(mainHomeTextContainer());
    let mainHomeImgContainer = document.createElement('div');
    mainHomeImgContainer.classList.add('main-home-img-container');
    mainHomeImgContainer.appendChild(mainHomeImg());
    mainHomeContent.appendChild(mainHomeImgContainer);
    return mainHomeContent;
}

mainHome();