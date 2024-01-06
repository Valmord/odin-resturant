import { appendChild, createElement, createElementWithClass, getElementByClass, 
    classList as cL, appendChildren, createElementWithClasses, content, createImgElement} from "./utils";


const imagesSrc = '../src/images/';

function homePage() {
    const create = () => {
        // appendChild(parent, ...children);
        appendChild(content, createElementWithClass('div','',cL.homePage));
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
        const main = appendChild(content, createMainElement());
        const menuContainer = appendChild(main, createElementWithClass('div','', cL.menuContainer));
        appendChild(menuContainer, createImgElement(imagesSrc+'menu.jpg',cL.menuPicture))
        appendChild(menuContainer, createElement('h2','Menu'));
        appendChild(menuContainer, createElementWithClass('h6','(no refunds)','menu-no-refunds'));  
        createMenuGridItems(menuContainer); 
    }

    const createMainElement = () => {
        const mainElement = document.createElement('div');
        mainElement.classList.add(cL.menuPage);
        mainElement.classList.add(cL.hidden);
        return mainElement;
    }

    const createMenuGridItems = (container) => {
        const gridImages = ['krabby-patty.jpg','krabby-meal.jpg','kelp-shake.jpg', 'coral-bits.jpg'];
        const gridText = ['Krabby Patty', 'Krabby Meal', 'Kelp Shake', 'Coral Bits'];
        gridImages.forEach( (image, index) => {
            const gridItem = createElementWithClasses('div','','menu', 'grid-item');
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



function aboutPage(){
    const create = () => {
        const main = appendChild(content, createElementWithClasses('div','',cL.aboutPage,cL.hidden));
        const aboutContainer = appendChild(main, createElementWithClass('div','', cL.aboutContainer));
        appendChild(aboutContainer, createElement('h2','About'));
        createAboutGridItems(aboutContainer);
    }

    const createAboutGridItems = (container) => {
        const gridImages = ['MrKrabs.jpg','Spongebob.jpg','Squidward.jpg'];
        const gridText = [
            'Eugene Krabs, a.k.a Mr Krabs, is the owner of the Krusty Krab. Mr Krabs is an entrepreneur and overall extraordinaire. Come and eat at the Krusty Krab to get a bargin today (no refunds!)',
            'Spongebob Squarepants, sole fry cook at the Krusty Krab. Just alright at his job, he cooks every Krabby patty with love.',
            'Squidward Tentacles, Krusty Krab cashier.'];
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