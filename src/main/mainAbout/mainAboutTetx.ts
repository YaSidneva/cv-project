import './style.css';

export function mainAboutText() {
    let mainAboutText = document.createElement('div');
    let mainAboutTextGreet = document.createElement('div');
    mainAboutTextGreet.innerText = 'About';
    mainAboutTextGreet.classList.add('main-about-text-greet');
    let mainAboutTextName = document.createElement('h2');
    mainAboutTextName.innerText = 'About me?';
    let mainAboutTextDescr = document.createElement('div');
    mainAboutTextDescr.innerText = `High motivated Junior Frontend Developer with a passion for
crafting clean and efficient user interfaces. Proficient in HTML,
CSS, and JavaScript, with a solid understanding of modern
frontend frameworks such as React.js. Experienced in translating
design mockups and wireframes into responsive web pages while
ensuring cross-browser compatibility. A quick learner with a strong
attention to detail and a commitment to staying updated with the
latest web technologies and best practices.`;

    mainAboutText.appendChild(mainAboutTextGreet);
    mainAboutText.appendChild(mainAboutTextName);
    mainAboutText.appendChild(mainAboutTextDescr);
    return mainAboutText;
}

mainAboutText();