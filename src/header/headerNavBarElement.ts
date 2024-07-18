
export function headerNavBarElement(title: string, href: string) {
    let headerNavBarElement = document.createElement('a');
    headerNavBarElement.classList.add('header-nav-bar-element');
    headerNavBarElement.href = href;
    headerNavBarElement.innerText = title;

    return headerNavBarElement;
}
