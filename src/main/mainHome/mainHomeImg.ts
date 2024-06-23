import './style.css';

export function mainHomeImg() {
    let mainHomeImg = document.createElement('img');
    mainHomeImg.src = 'avatar.jpg';
    mainHomeImg.classList.add('main-home-img');
    return mainHomeImg;
}

mainHomeImg();