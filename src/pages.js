import { domElements } from "./dom-elements";
import { appendChildren, createElement, createElementWithClass, getElementByClass, 
    classList as cL, 
    createElementWithClasses} from "./utils";


function homePage() {
    const create = () => {
        // appendChild(parent, ...children);
        appendChildren(domElements.contentElement, createMainElement());
        appendChildren(getElementByClass(cL.homePage), createH2Element());
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
        appendChildren(domElements.contentElement, createMainElement());
        appendChildren(getElementByClass(cL.menuPage), createElementWithClass('div','', cL.menuContainer));
        appendChildren(getElementByClass(cL.menuContainer), createElement('h2','Menu'));
    }

    const createMainElement = () => {
        const mainElement = document.createElement('div');
        mainElement.classList.add(cL.menuPage);
        mainElement.classList.add(cL.hidden);
        return mainElement;
    }

    const init = () => {
        create();
    }

    return { init };
}



function aboutPage(){
    const create = () => {
        appendChildren(domElements.contentElement, createMainElement());
        appendChildren(getElementByClass(cL.aboutPage), createElementWithClass('div','', cL.aboutContainer));
        appendChildren(getElementByClass(cL.aboutContainer), createElement('h2','About'));
    }

    const createMainElement = () => {
        const mainElement = document.createElement('div');
        mainElement.classList.add(cL.aboutPage);
        mainElement.classList.add(cL.hidden);
        return mainElement;
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