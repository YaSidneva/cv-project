import { mainProjectsProject } from "./mainProjectsProject";
import './style.css';

export const projectsData = [
    { "image": "screen1.png", "position": "left", "link": "", "title": "CV1" },
    { "image": "screen1.png", "position": "central", "link": "", "title": "CV2" },
    { "image": "screen1.png", "position": "right", "link": "", "title": "Project 1" },
    { "image": "screen1.png", "position": null, "link": "", "title": "CV" },
    { "image": "screen1.png", "position": null, "link": "", "title": "Project 2" }
];

export const sliderState: SliderState = {
    currentActiveSlide: 1,
    projectsData: [
        { image: "screen1.png", position: "left", link: "", title: "CV1" },
        { image: "screen1.png", position: "central", link: "", title: "CV2" },
        { image: "screen1.png", position: "right", link: "", title: "Project 1" },
        { image: "screen1.png", position: null, link: "", title: "CV" },
        { image: "screen1.png", position: null, link: "", title: "Project 2" }
    ]
}

export let currentActiveSlide: Number = 1;

export function mainProjectsTable() {
    let mainProjectsTable = document.createElement('div');
    mainProjectsTable.classList.add('main-projects-table');

    renderSlides(mainProjectsTable);

    return mainProjectsTable;
}

export function renderSlides(container: HTMLElement) {
    container.innerHTML = '';
    for (let i = 0; i < sliderState.projectsData.length; i++) {
        const element = sliderState.projectsData[i];
        let itemElement = mainProjectsProject(element.image, element.title);
        container.appendChild(itemElement);
        if (element.position) {
            itemElement.classList.add(`${element.position}-slide`);
        } else {
            itemElement.style.display = 'none';
        }
    }
}

mainProjectsTable();