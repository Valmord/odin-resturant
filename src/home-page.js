import { appendChild, createElement, createElementWithClass, getElementByClass, imagesSrc,
    classList as cL, appendChildren, createElementWithClasses, content, createImgElement} from "./utils";

    
const home = (function homePage() {
    const create = () => {
        // appendChild(parent, ...children);
        content.innerHTML = '';
        const main = appendChild(content, createElementWithClass('div','',cL.homePage));
        appendChild(getElementByClass(cL.homePage), createElement('h2','Welcome to...'));
        createReview(main);
        createStoreInfo(main);
    }

    const createStoreInfo = (main) => {
        const infoToggle = appendChild(main, createElementWithClass('div','store info',cL.infoButton));
        const infoModal = appendChild(main, createElementWithClasses('div', 'Store hours and location', cL.infoModal, cL.hidden));
        const textArr = [
            'Opening hours:',
            '9am-5pm Monday-Saturday',
            '(Or every other episode)',
            'Location:',
            'Across from the Chum Bucket,',
            '831 Bottom Feeder Lane'
        ]
        textArr.forEach( (textLine,index) => appendChild(infoModal, createElement('p',textArr[index])));
    }

    const storeInfoListeners = () => {
        const button = getElementByClass(cL.infoButton);
        const modal = getElementByClass(cL.infoModal);
        button.addEventListener('click', () => {
            modal.classList.remove(cL.hidden);
            button.classList.add(cL.hidden);
        })
        modal.addEventListener('click', () => {
            button.classList.remove(cL.hidden);
            modal.classList.add(cL.hidden);
        })
    }

    const createReview = (main) => {
        const reviewToggle = appendChild(main, createElementWithClass('div','sea reviews',cL.reviewButton));
        const reviewModal = appendChild(main, createElementWithClasses('div', 'Sea Reviews', cL.reviewModal,cL.hidden));
        const reviewItem = appendChild(reviewModal, createElementWithClass('div','',cL.reviewItem));
        appendChild(reviewItem, createImgElement(imagesSrc+'plankton.png','plankton',cL.reviewPicture));
        appendChild(reviewItem, createElement('p','The only place with a secret formula worth stealing - Plankton'))
    }

    const reviewListeners = () => {
        const button = getElementByClass(cL.reviewButton);
        const modal = getElementByClass(cL.reviewModal);
        const infoModal = getElementByClass(cL.infoModal);
        const infoButton = getElementByClass(cL.infoButton);
        button.addEventListener('click', () => {
            modal.classList.remove(cL.hidden);
            button.classList.add(cL.hidden);
            infoModal.classList.add('modal-offset');
            infoButton.classList.add('modal-offset');
        })
        modal.addEventListener('click', () => {
            modal.classList.add(cL.hidden);
            button.classList.remove(cL.hidden);
            infoModal.classList.remove('modal-offset');
            infoButton.classList.remove('modal-offset');
        })
    }

    const init = () => {
        create();
        reviewListeners();
        storeInfoListeners();
    }

    return { init };
})();
const createHomePage = home.init;

export { createHomePage };