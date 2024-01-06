const classList = {
    navbar: 'nav-bar',
    homeTab: 'home-tab',
    menuTab: 'menu-tab',
    aboutTab: 'about-tab',

    homePage: 'home-page',
    menuPage: 'menu-page',
    aboutPage: 'about-page',

    menuGrid: 'menu-grid',
    menuContainer: 'menu-container',
    aboutContainer: 'about-container',

    reviewButton: 'review-button',
    reviewModal: 'review-modal',
    reviewItem: 'review-item',
    reviewPicture: 'review-pic',
    infoButton: 'info-button',
    infoModal: 'info-modal',
    menuPicture: 'menu-pic',
    hidden: 'hidden',
}

const imagesSrc = '../src/images/';


function appendChild(parent, child) {
    parent.appendChild(child);
    return child;
}

function appendChildren(parent, ...children) {
    children.forEach(child => parent.appendChild(child));
}

function createImgElement(src, alt, cls){
    const element = document.createElement('img');
    element.src = src;
    element.alt = alt;
    if (cls) element.classList.add(cls);
    return element;
}

function createElement(elementId, text){
    const element = document.createElement(elementId);
    if (text) element.textContent = text;
    return element;
}

function createElementWithClass(elementId, text, cssClass){
    const element = createElement(elementId, text)
    element.classList.add(cssClass);
    return element;
}

function createElementWithClasses(elementId, text, ...cssClasses){
    const element = createElement(elementId, text)
    element.classList.add(...cssClasses);
    return element;
}

function getElementByClass(cssClass){
    return document.querySelector('.'+cssClass);
}

const content = document.querySelector('#content');

export { appendChildren, appendChild, createElement, createElementWithClass, imagesSrc,
    createElementWithClasses, getElementByClass, classList, content, createImgElement }