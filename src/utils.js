const classList = {
    navbar: 'nav-bar',
    homeTab: 'home-tab',
    menuTab: 'menu-tab',
    aboutTab: 'about-tab',

    homePage: 'home-page',
    menuPage: 'menu-page',
    aboutPage: 'about-page',

    menuContainer: 'menu-container',
    aboutContainer: 'about-container',
    hidden: 'hidden',
}


function appendChildren(parent, ...children) {
    children.forEach(child => parent.appendChild(child));
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

function createElementWithClasses(elementId, text, cssClasses){
    const element = createElement(elementId, text)
    element.classList.add(...cssClasses);
    return element;
}

function getElementByClass(cssClass){
    return document.querySelector('.'+cssClass);
}

export { appendChildren, createElement, createElementWithClass,
    createElementWithClasses, getElementByClass, classList }