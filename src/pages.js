import { domElements } from "./dom-elements";
import { classList as cL } from "./class-list";
import { appendChildren, createElement, createElementWithClass } from "./utils";


function homePage() {
    const create = () => {
        // appendChild(parent, ...children);
        appendChildren(domElements.contentElement, createMainElement());
        appendChildren(cL.getElement(cL.homePage), createH2Element());
    }

    const createMainElement = () => {
        const mainElement = document.createElement('main');
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
        appendChildren(cL.getElement(cL.menuPage), createElement('h2','About us'));
    }

    const createMainElement = () => {
        const mainElement = document.createElement('main');
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
        appendChildren(cL.getElement(cL.aboutPage), createElement('h2','About us'));
    }

    const createMainElement = () => {
        const mainElement = document.createElement('main');
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