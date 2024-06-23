export function createButton(text: string): HTMLButtonElement {
    const newButton = document.createElement('button');
    newButton.textContent = text;
    newButton.classList.add('home-btn');
    newButton.classList.add('button');
    return newButton;
}