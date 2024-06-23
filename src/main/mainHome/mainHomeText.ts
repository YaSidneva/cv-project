export function mainHomeText() {
    let mainHomeText = document.createElement('div');
    let mainHomeTextGreet = document.createElement('div');
    mainHomeTextGreet.innerText = 'Hi Everyone, I am';
    mainHomeTextGreet.classList.add('main-home-text-greet');
    let mainHomeTextName = document.createElement('h2');
    mainHomeTextName.innerText = 'Iana Sidneva';
    let mainHomeTextDescr = document.createElement('div');
    mainHomeTextDescr.innerText = 'Lorem ipsum dolor sit amet consectetur. Vitae maecenas pellentesque tellus tempus purus integer nisi cras fermentum.';

    mainHomeText.appendChild(mainHomeTextGreet);
    mainHomeText.appendChild(mainHomeTextName);
    mainHomeText.appendChild(mainHomeTextDescr);
    return mainHomeText;
}

mainHomeText();