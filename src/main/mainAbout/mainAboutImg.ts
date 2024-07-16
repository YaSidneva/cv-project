export function mainAboutImg() {
    let mainHomeImg = document.createElement('img');
    mainHomeImg.src = 'about.png';
    mainHomeImg.classList.add('main-about-img');
    return mainHomeImg;
}

mainAboutImg();