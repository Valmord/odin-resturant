import { appendChild, createElement, createElementWithClass, imagesSrc,
    classList as cL, appendChildren, createElementWithClasses, content, createImgElement} from "./utils";

const createAboutPage = (function aboutPage(){
    const create = () => {
        content.innerHTML = '';
        const main = appendChild(content, createElementWithClass('div','',cL.aboutPage));
        const aboutContainer = appendChild(main, createElementWithClass('div','', cL.aboutContainer));
        appendChild(aboutContainer, createElement('h2','About'));
        createAboutGridItems(aboutContainer);
    }

    const createAboutGridItems = (container) => {
        const gridImages = ['MrKrabs.jpg','Spongebob.jpg','Squidward.jpg'];
        const gridText = [
            'Eugene Krabs, a.k.a Mr Krabs, is the owner of the Krusty Krab. Mr Krabs is an entrepreneur and overall extraordinaire. Come and eat at the Krusty Krab to get a bargin today (no refunds!)',
            'Spongebob Squarepants, sole fry cook at the Krusty Krab. Only just adequate at his job, he cooks every Krabby patty with love.',
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
})().init;

export { createAboutPage };