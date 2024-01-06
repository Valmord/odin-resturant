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
    cssClasses.forEach( cls => element.classList.add(cls))
    return element;
}

export { appendChildren, createElement, createElementWithClass }