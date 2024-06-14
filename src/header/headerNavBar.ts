import './style.css';

export function headerNavBar() {
    let headerNavBar = document.createElement('div');
    headerNavBar.classList.add('header-nav-bar');

    let homeLink = document.createElement('a');
    homeLink.innerText = 'Home';
    headerNavBar.appendChild(homeLink);

    let aboutLink = document.createElement('a');
    aboutLink.innerText = 'About';
    headerNavBar.appendChild(aboutLink);

    let skillLink = document.createElement('a');
    skillLink.innerText = 'Skill';
    headerNavBar.appendChild(skillLink);

    let projectsLink = document.createElement('a');
    projectsLink.innerText = 'Projects';
    headerNavBar.appendChild(projectsLink);

    let contactsLink = document.createElement('a');
    contactsLink.innerText = 'Contacts';
    headerNavBar.appendChild(contactsLink);

    return headerNavBar;
}

headerNavBar();
