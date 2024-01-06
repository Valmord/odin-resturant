import { appendChild, createElement, createElementWithClass, getElementByClass, 
    classList as cL, appendChildren, createElementWithClasses, content, createImgElement} from "./utils";


const imagesSrc = '../src/images/';

const home = (function homePage() {
    const create = () => {
        // appendChild(parent, ...children);
        const main = appendChild(content, createElementWithClass('div','',cL.homePage));
        appendChild(getElementByClass(cL.homePage), createElement('h2','Welcome to...'));
        const reviewToggle = appendChild(main, createElementWithClass('div','sea reviews',cL.reviewButton));
        const reviewModal = appendChild(main, createElementWithClasses('div', 'Sea Reviews', cL.reviewModal,cL.hidden));
        const reviewItem = appendChild(reviewModal, createElementWithClass('div','',cL.reviewItem));
        appendChild(reviewItem, createImgElement(imagesSrc+'plankton.png','plankton',cL.reviewPicture));
        appendChild(reviewItem, createElement('p','The only place with a secret formula worth stealing - Plankton'))
        reviewListeners(reviewToggle, reviewModal)
    }

    const reviewListeners = (button, modal) => {
        button.addEventListener('click', () => {
            button.classList.toggle(cL.hidden);
            modal.classList.toggle(cL.hidden);
        })
        modal.addEventListener('click', () => {
            button.classList.toggle(cL.hidden);
            modal.classList.toggle(cL.hidden);
        })
    }

    const init = () => {
        create();
    }

    return { init };
})();


const menu = (function menuPage(){
    const create = () => {
        const main = appendChild(content, createElementWithClasses('div','',cL.menuPage,cL.hidden));
        const menuContainer = appendChild(main, createElementWithClass('div','', cL.menuContainer));
        appendChild(menuContainer, createImgElement(imagesSrc+'menu.jpg','menu',cL.menuPicture))
        appendChild(menuContainer, createElement('h2','Menu'));
        appendChild(menuContainer, createElementWithClass('h6','(no refunds)','menu-no-refunds'));  
        createMenuGridItems(menuContainer); 
    }

    const createMenuGridItems = (container) => {
        const gridImages = ['krabby-patty.jpg','krabby-meal.jpg','kelp-shake.jpg', 'coral-bits.jpg'];
        const gridText = ['Krabby Patty', 'Krabby Meal', 'Kelp Shake', 'Coral Bits'];
        gridImages.forEach( (image, index) => {
            const gridItem = createElementWithClasses('div','','menu', 'grid-item');
            const img = createImgElement(imagesSrc+image,gridItem[index]);
            const p = createElement('p', gridText[index]);
            appendChildren(gridItem, img, p); 
            appendChild(container,gridItem);  
        })
    }

    const init = () => {
        create();
    }

    return { init };
})();



const about = (function aboutPage(){
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
            const img = createImgElement(imagesSrc+image,gridText[index]);
            const p = createElement('p', gridText[index]);
            appendChildren(gridItem, img, p); 
            appendChild(container,gridItem);
        })
    }

    const init = () => {
        create();
    }

    return { init };
})();

export { home as createHomePage, about as createAboutPage, menu as createMenuPage };