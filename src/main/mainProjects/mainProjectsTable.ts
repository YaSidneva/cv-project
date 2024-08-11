import { mainProjectsProject } from "./mainProjectsProject";
import './style.css';

export const sliderState: SliderState = {
    currentActiveSlide: 1,
    projectsData: [
        { image: "keyboard.png", position: "left", link: "https://yasidneva.github.io/virtual-keyboard/", title: "Keyboard" },
        { image: "screen1.png", position: "central", link: "", title: "My CV" },
        { image: "bikes.png", position: "right", link: "https://yasidneva.github.io/stolen-bikes/", title: "Stolen bikes" },
        { image: "kanban.png", position: null, link: "https://yasidneva.github.io/Kanban/", title: "Kanban" },
        { image: "shelter.png", position: null, link: "https://rolling-scopes-school.github.io/yasidneva-JSFE2023Q1/shelter/main.html", title: "Shelter" },
        { image: "coffee.png", position: null, link: "https://yasidneva.github.io/coffee-house/coffee-house/home.html", title: "Coffee house" },
        { image: "hangman.png", position: null, link: "https://yasidneva.github.io/hangman/hangman/index", title: "Hangman game" },
        { image: "nonograms.png", position: null, link: "https://yasidneva.github.io/nonograms/nonograms/index", title: "Nonograms game" }


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
        let itemElement = mainProjectsProject(element);
        container.appendChild(itemElement);
        if (element.position) {
            itemElement.classList.add(`${element.position}-slide`);
        } else {
            itemElement.style.display = 'none';
        }
    }
}

mainProjectsTable();