import { footerTextContainer } from "./footerTextContainer";
import './style.css';

export function footer() {
    let footer = document.createElement('div');
    footer.classList.add('footer');
    footer.id = 'contacts';
    footer.appendChild(footerTextContainer());

    return footer;
}

footer();