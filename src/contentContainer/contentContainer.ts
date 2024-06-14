import './style.css'

export function createContentContainer() {
    let contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');

    return contentContainer;
}

createContentContainer();