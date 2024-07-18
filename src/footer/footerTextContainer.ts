import { footerLinksContainer } from "./footerLinksContainer";
import { footerText } from "./footerText";

export function footerTextContainer() {
    let footerTextContainer = document.createElement('div');
    footerTextContainer.classList.add('footer-text-container');
    footerTextContainer.appendChild(footerText());
    footerTextContainer.appendChild(footerLinksContainer());
    return footerTextContainer;
}

footerTextContainer();