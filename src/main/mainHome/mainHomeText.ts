export function mainHomeText() {
    let mainHomeText = document.createElement('div');
    let mainHomeTextGreet = document.createElement('div');
    mainHomeTextGreet.innerText = 'Hi Everyone, I am';
    mainHomeTextGreet.classList.add('main-home-text-greet');
    let mainHomeTextName = document.createElement('h2');
    mainHomeTextName.innerText = 'Iana Sidneva';
    let mainHomeTextDescr = document.createElement('div');
    mainHomeTextDescr.innerText = `Frontend-developer. Specializing in creating elegant user interfaces. My expertise in technologies and proficiency in coding enable me to deliver projects of high quality and functionality.`;

    mainHomeText.appendChild(mainHomeTextGreet);
    mainHomeText.appendChild(mainHomeTextName);
    mainHomeText.appendChild(mainHomeTextDescr);
    return mainHomeText;
}

mainHomeText();