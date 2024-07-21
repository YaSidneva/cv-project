import { mainProjectsController } from "./mainProjectsController";
import './style.css';

export function mainProjectsControlContainer() {
    let controllers = document.createElement('div');
    controllers.classList.add('controllers');

    let rotateCardsRightToLeft = () => {
        const currentSlideLeft = document.querySelector('.left-slide') as HTMLElement;
        const currentSlideCenter = document.querySelector('.central-slide') as HTMLElement;
        const currentSlideRight = document.querySelector('.right-slide') as HTMLElement;
        console.log('rotating...');

        currentSlideLeft.classList.remove('left-slide');
        currentSlideLeft.classList.add('right-slide');
        currentSlideLeft.style.opacity = '0';

        currentSlideCenter.classList.remove('central-slide');
        currentSlideCenter.classList.add('left-slide');
        currentSlideCenter.style.opacity = '0';

        currentSlideRight.classList.remove('right-slide');
        currentSlideRight.classList.add('central-slide');
        currentSlideRight.style.opacity = '1';
    };

    let rotateCardsLeftToRight = () => {
        const currentSlideLeft = document.querySelector('.left-slide') as HTMLElement;
        const currentSlideCenter = document.querySelector('.central-slide') as HTMLElement;
        const currentSlideRight = document.querySelector('.right-slide') as HTMLElement;
        console.log('rotating...');

        currentSlideLeft.classList.remove('left-slide');
        currentSlideLeft.classList.add('central-slide');
        currentSlideLeft.style.opacity = "1";

        currentSlideCenter.classList.remove('central-slide');
        currentSlideCenter.classList.add('right-slide');
        currentSlideCenter.style.opacity = "0";

        currentSlideRight.style.opacity = "0";
        currentSlideRight.classList.remove('right-slide');
        currentSlideRight.classList.add('left-slide');

    };


    let arrowPrev = controllers.appendChild(mainProjectsController(rotateCardsRightToLeft));
    arrowPrev.classList.add('arrow-prev');

    let arrowNext = controllers.appendChild(mainProjectsController(rotateCardsLeftToRight));
    arrowNext.classList.add('arrow-next');
    return controllers;
}

mainProjectsControlContainer();