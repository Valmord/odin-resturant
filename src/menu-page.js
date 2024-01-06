import { appendChild, createElement, createElementWithClass, imagesSrc,
    classList as cL, appendChildren, createElementWithClasses, content, createImgElement} from "./utils";


const createMenuPage = (function menuPage(){
    const create = () => {
        content.innerHTML = '';
        const main = appendChild(content, createElementWithClass('div','',cL.menuPage));
        const menuContainer = appendChild(main, createElementWithClass('div','', cL.menuContainer));
        const leftContainer = appendChild(menuContainer, createElement('div', '', 'menu-left'));
        appendChild(leftContainer, createElement('h2','Menu'));
        appendChild(leftContainer, createElementWithClass('h6','(no refunds)','menu-no-refunds'));  
        appendChild(leftContainer, createImgElement(imagesSrc+'menu.jpg','menu',cL.menuPicture))
        const menuGrid = appendChild(menuContainer, createElementWithClass('div','',cL.menuGrid));
        appendChild(menuGrid,createElement('p','Todays Specials:'));
        createMenuGridItems(menuGrid); 
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
})().init;    

export { createMenuPage };