import { domElements } from "./dom-elements";
import { appendChild, createElement, createElementWithClass, getElementByClass, 
    classList as cL, appendChildren, createElementWithClasses} from "./utils";


function homePage() {
    const create = () => {
        // appendChild(parent, ...children);
        appendChild(domElements.contentElement, createMainElement());
        appendChild(getElementByClass(cL.homePage), createH2Element());
    }

    const createMainElement = () => {
        const mainElement = document.createElement('div');
        mainElement.classList.add(cL.homePage);
        return mainElement;
    }
    
    const createH2Element = () => {
        const h2Element = document.createElement('h2');
        h2Element.textContent = "Welcome to...";
        return h2Element;
    }

    const init = () => {
        create();
    }

    return { init };
}


function menuPage(){
    const create = () => {
        const main = appendChild(domElements.contentElement, createMainElement());
        const menuContainer = appendChild(main, createElementWithClass('div','', cL.menuContainer));
        appendChild(menuContainer, createElement('h2','Menu'));
    }

    const createMainElement = () => {
        const mainElement = document.createElement('div');
        mainElement.classList.add(cL.menuPage);
        mainElement.classList.add(cL.hidden);
        return mainElement;
    }

    const createMenuItem = () => {

    }

    const init = () => {
        create();
    }

    return { init };
}



function aboutPage(){
    const create = () => {
        const main = createElementWithClasses('div','',cL.aboutPage,cL.hidden)
        const aboutContainer = appendChild(main, createElementWithClass('div','', cL.aboutContainer));
        appendChild(aboutContainer, createElement('h2','About'));
        createAboutGridItems(aboutContainer);

        appendChild(domElements.contentElement,main);
    }

    const createAboutGridItems = (container) => {
        const imagesSrc = '../src/images/';
        const gridImages = ['MrKrabs.jpg','Spongebob.jpg','Squidward.jpg'];
        const gridText = [
            'Eugene Krabs, a.k.a Mr Krabs, is the owner of the Krusty Krab. Mr Krabs is an entrepreneur and overall extraordinaire. Come and eat at the Krusty Krab to get a bargin today (no refunds!)',
            'Spongebob Squarepants, sole fry cook at the Krusty Krab. Just alright at his job, he cooks every Krabby patty with love.',
            'Squidward Tentacles, Krusty Krab cashier.']
        const gridArr = [];
        gridImages.forEach( (image, index) => {
            const gridItem = createElementWithClasses('div','','about', 'grid-item');
            const img = document.createElement('img');
            img.src = imagesSrc+image;
            const p = createElement('p', gridText[index]);
            appendChildren(gridItem, img, p); 
            appendChild(container,gridItem);
            
        })
    }

    const init = () => {
        create();
    }

    return { init };
}
























const home = homePage();
const about = aboutPage();
const menu = menuPage();

export { home as createHomePage, about as createAboutPage, menu as createMenuPage };