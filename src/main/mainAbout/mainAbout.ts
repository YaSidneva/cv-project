import { mainAboutImg } from "./mainAboutImg";
import { mainAboutTextContainer } from "./mainAboutTextContainer";
import './style.css';

export function mainAbout() {
    let about = document.createElement('div');
    about.classList.add('about');
    about.id = 'about';
    about.appendChild(mainAboutImg());
    about.appendChild(mainAboutTextContainer());
    return about;
}

mainAbout();