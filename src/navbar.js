import { getElementByClass, classList as cL, createElementWithClass, appendChild, 
    createElement, content } from "./utils";


function addListeners(){

    const tabListeners = () => {
        const tabElements = [
            getElementByClass(cL.homeTab),
            getElementByClass(cL.menuTab),
            getElementByClass(cL.aboutTab)
    ]

        tabElements.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabPages = [
                    getElementByClass(cL.homePage),
                    getElementByClass(cL.menuPage),
                    getElementByClass(cL.aboutPage)
            ]
                tabPages.forEach(page => page.classList.add(cL.hidden));
                switch (true) {
                    case tab.classList.contains(cL.homeTab):
                        return void tabPages[0].classList.remove(cL.hidden);
                    case tab.classList.contains(cL.menuTab): 
                        return void tabPages[1].classList.remove(cL.hidden);
                    case tab.classList.contains(cL.aboutTab):
                        return void tabPages[2].classList.remove(cL.hidden);
                    default:
                        break;
                }
        })
    })
    }

    return { tabListeners };
}
const listeners = addListeners();

function navbar() {
    const create = () => {
        const tabNames = ['Home', 'Menu', 'About'];
        const navElement = createElementWithClass('nav','',cL.navbar);
        appendChild(navElement,createElement('h1','The Krusty Krab'));
        
        const navList = createElement('ul');
        for (let i = 0; i < tabNames.length; i++){
            const navListItem = createElementWithClass(
                'li', tabNames[i],tabNames[i].toLowerCase()+'-tab')
            navList.appendChild(navListItem);
        }
        navElement.appendChild(navList);
        content.appendChild(navElement);
    }

    const init = () => {
        create();
        listeners.tabListeners();
    }

    return { init };
}

const createHeader = navbar();

export { createHeader };