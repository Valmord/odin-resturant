import { createAboutPage } from "./about-page";
import { createHomePage } from "./home-page";
import { createMenuPage } from "./menu-page";
import { getElementByClass, classList as cL, createElementWithClass, appendChild, 
    createElement} from "./utils";


const listeners = (function addListeners(){

    const logoListener = () => {
        const logo = document.querySelector('.nav-bar h1');
        logo.addEventListener('click', createHomePage)        
    }

    const tabListeners = () => {
        getElementByClass(cL.homeTab).addEventListener('click', createHomePage);
        getElementByClass(cL.menuTab).addEventListener('click', createMenuPage);
        getElementByClass(cL.aboutTab).addEventListener('click', createAboutPage);
    }

    return { tabListeners, logoListener };
})();

const createHeader = (function navbar() {
    const create = () => {
        const tabNames = ['Home', 'Menu', 'About'];
        const navElement = getElementByClass(cL.navbar);
        appendChild(navElement,createElement('h1','The Krusty Krab'));
        
        const navList = createElement('ul');
        for (let i = 0; i < tabNames.length; i++){
            const navListItem = createElementWithClass(
                'li', tabNames[i],tabNames[i].toLowerCase()+'-tab')
            navList.appendChild(navListItem);
        }
        navElement.appendChild(navList);
    }

    const init = () => {
        create();
        listeners.tabListeners();
        listeners.logoListener();
    }

    return { init };
})();

export { createHeader };