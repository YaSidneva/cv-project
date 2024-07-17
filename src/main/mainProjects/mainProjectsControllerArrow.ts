import './style.css';

export function createArrow() {
    let arrow = document.createElement('div');
    arrow.classList.add('arrow');
    return arrow;
}

createArrow();