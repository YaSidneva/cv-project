import { mainProjectsController } from "./mainProjectsController";
import { renderSlides, sliderState } from './mainProjectsTable';
import './style.css';

export function mainProjectsControlContainer(sliderContainer: HTMLElement) {
    let controllers = document.createElement('div');
    controllers.classList.add('controllers');

    let rotateCardsRightToLeft = () => {

        sliderState.currentActiveSlide += 1;

        const currentSlideLeft = document.querySelector('.left-slide') as HTMLElement;
        let currentSlideLeftState = sliderState.projectsData.find(projectData => projectData.position == 'left');
        if (currentSlideLeftState) {
            currentSlideLeftState.position = null;
        }

        const currentSlideCenter = document.querySelector('.central-slide') as HTMLElement;
        let currentSlideCentralState = sliderState.projectsData.find(projectData => projectData.position == 'central');
        if (currentSlideCentralState) {
            currentSlideCentralState.position = 'left';
        }

        const currentSlideRight = document.querySelector('.right-slide') as HTMLElement;
        let currentSlideRightState = sliderState.projectsData.find(projectData => projectData.position == 'right');
        if (currentSlideRightState) {
            currentSlideRightState.position = 'central';
        }

        sliderState.projectsData[(sliderState.currentActiveSlide + 1) % sliderState.projectsData.length].position = 'right';

        currentSlideLeft.classList.remove('left-slide');
        currentSlideLeft.classList.add('right-slide');
        currentSlideLeft.style.opacity = '0';

        currentSlideCenter.classList.remove('central-slide');
        currentSlideCenter.classList.add('left-slide');
        currentSlideCenter.style.opacity = '0';

        currentSlideRight.classList.remove('right-slide');
        currentSlideRight.classList.add('central-slide');
        currentSlideRight.style.opacity = '1';

        setTimeout(() => {
            renderSlides(sliderContainer);
        }, 500)
    };

    let rotateCardsLeftToRight = () => {
        sliderState.currentActiveSlide = (sliderState.currentActiveSlide - 1);
        if (sliderState.currentActiveSlide < 0) {
            sliderState.currentActiveSlide += sliderState.projectsData.length;
        }

        const currentSlideLeft = document.querySelector('.left-slide') as HTMLElement;
        let currentSlideLeftState = sliderState.projectsData.find(projectData => projectData.position == 'left');

        const currentSlideCenter = document.querySelector('.central-slide') as HTMLElement;
        let currentSlideCentralState = sliderState.projectsData.find(projectData => projectData.position == 'central');

        const currentSlideRight = document.querySelector('.right-slide') as HTMLElement;
        let currentSlideRightState = sliderState.projectsData.find(projectData => projectData.position == 'right');

        if (currentSlideLeftState) {
            currentSlideLeftState.position = 'central';
        }
        if (currentSlideCentralState) {
            currentSlideCentralState.position = 'right';
        }
        if (currentSlideRightState) {
            currentSlideRightState.position = null;
        }


        let currentSlideStartState = sliderState.projectsData[(sliderState.currentActiveSlide + sliderState.projectsData.length - 1) % sliderState.projectsData.length];
        if (currentSlideStartState) {
            currentSlideStartState.position = 'left';
        }


        currentSlideLeft.classList.remove('left-slide');
        currentSlideLeft.classList.add('central-slide');
        currentSlideLeft.style.opacity = "1";

        currentSlideCenter.classList.remove('central-slide');
        currentSlideCenter.classList.add('right-slide');
        currentSlideCenter.style.opacity = "0";

        currentSlideRight.style.opacity = "0";
        currentSlideRight.classList.remove('right-slide');
        currentSlideRight.classList.add('left-slide');

        setTimeout(() => {
            renderSlides(sliderContainer);
        }, 500);

    };


    let arrowPrev = controllers.appendChild(mainProjectsController(rotateCardsLeftToRight));
    arrowPrev.classList.add('arrow-prev');

    let arrowNext = controllers.appendChild(mainProjectsController(rotateCardsRightToLeft));
    arrowNext.classList.add('arrow-next');
    return controllers;
}
