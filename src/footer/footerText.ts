export function footerText() {
    let footerText = document.createElement('div');
    footerText.classList.add('footer-text');
    let footerTextGreet = document.createElement('div');
    footerTextGreet.innerText = 'Contacts';
    footerTextGreet.classList.add('footer-text-greet');
    let footerTextName = document.createElement('h2');
    footerTextName.innerText = 'Get in touch';

    footerText.appendChild(footerTextGreet);
    footerText.appendChild(footerTextName);
    return footerText;
}

footerText();