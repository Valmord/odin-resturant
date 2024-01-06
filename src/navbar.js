import { domElements } from "./dom-elements";
import { classList as cL } from "./class-list";
import { createAboutPage, createHomePage } from "./pages";


function addListeners(){

    const tabListeners = () => {
        const tabElements = [
            cL.getElement(cL.homeTab),
            cL.getElement(cL.menuTab),
            cL.getElement(cL.aboutTab)
    ]

        tabElements.forEach(tab => { 
            console.log(tab);
            tab.addEventListener('click', () => {
                const tabPages = [
                    cL.getElement(cL.homePage),
                    cL.getElement(cL.menuPage),
                    cL.getElement(cL.aboutPage)
            ]
                tabPages.forEach(page => page.classList.add(cL.hidden));
                switch (true) {
                    case tab.classList.contains(cL.homeTab):
                        console.log('hello');
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
        const navElement = document.createElement('nav');
        navElement.classList.add(cL.navbar);
        const navHeaderElement = document.createElement('h1');
        navHeaderElement.textContent = 'The Krusty Krab';
        navElement.appendChild(navHeaderElement);
        
        const navList = document.createElement('ul'); 
        for (let i = 0; i < tabNames.length; i++){
            const navListItem = document.createElement('li');
            navListItem.textContent = tabNames[i];
            navListItem.classList.add(tabNames[i].toLowerCase()+'-tab');
            navList.appendChild(navListItem);
        }
        navElement.appendChild(navList);
        domElements.contentElement.appendChild(navElement);
    }

    const init = () => {
        create();
        listeners.tabListeners();
    }

    return { init };
}

const createHeader = navbar();

export { createHeader };