import './style.css';

export function mainAboutText() {
    let mainAboutText = document.createElement('div');
    let mainAboutTextGreet = document.createElement('div');
    mainAboutTextGreet.innerText = 'About';
    mainAboutTextGreet.classList.add('main-about-text-greet');
    let mainAboutTextName = document.createElement('h2');
    mainAboutTextName.innerText = 'About me?';
    let mainAboutTextDescr = document.createElement('div');
    mainAboutTextDescr.innerText = 'Lorem ipsum dolor sit amet consectetur. Vitae maecenas pellentesque tellus tempus purus integer nisi cras fermentum.';

    mainAboutText.appendChild(mainAboutTextGreet);
    mainAboutText.appendChild(mainAboutTextName);
    mainAboutText.appendChild(mainAboutTextDescr);
    return mainAboutText;
}

mainAboutText();