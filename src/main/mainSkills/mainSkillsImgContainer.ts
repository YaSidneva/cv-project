import './style.css';

export function mainSkillsImgContainer() {
    let mainSkillsImgContainer = document.createElement('div');
    mainSkillsImgContainer.classList.add('main-skills-img-container');
    let iconHtml = document.createElement('img');
    iconHtml.src = 'icon-html.svg';
    let iconCss = document.createElement('img');
    iconCss.src = 'icon-css.svg';
    let iconJs = document.createElement('img');
    iconJs.src = 'icon-js.svg';
    let iconTs = document.createElement('img');
    iconTs.src = 'icon-ts.svg';
    iconTs.classList.add('icon-ts');
    let iconReact = document.createElement('img');
    iconReact.src = 'icon-react.svg';
    let iconGit = document.createElement('img');
    iconGit.src = 'icon-git.svg';
    let iconFigma = document.createElement('img');
    iconFigma.src = 'icon-figma.svg';
    let iconNotion = document.createElement('img');
    iconNotion.src = 'icon-notion.svg';


    mainSkillsImgContainer.appendChild(iconHtml);
    mainSkillsImgContainer.appendChild(iconCss);
    mainSkillsImgContainer.appendChild(iconJs);
    mainSkillsImgContainer.appendChild(iconTs);
    mainSkillsImgContainer.appendChild(iconReact);
    mainSkillsImgContainer.appendChild(iconGit);
    mainSkillsImgContainer.appendChild(iconFigma);
    mainSkillsImgContainer.appendChild(iconNotion);
    return mainSkillsImgContainer;
}

mainSkillsImgContainer();