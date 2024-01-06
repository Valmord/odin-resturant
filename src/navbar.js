import { domElements } from "./dom-elements";

function createHeader() {
    const createNav = () => {
        const tabNames = ['Home', 'Menu', 'About'];
        const navElement = document.createElement('nav');
        navElement.classList.add('navbar');
        const navHeaderElement = document.createElement('h1');
        navHeaderElement.textContent = 'The Krusty Krab';
        navElement.appendChild(navHeaderElement);
        
        const navList = document.createElement('ul'); 
        for (let i = 0; i < tabNames.length; i++){
            const navListItem = document.createElement('li');
            navListItem.textContent = tabNames[i];
            navListItem.classList.add(tabNames[i].toLowerCase()+'-button');
            navList.appendChild(navListItem);
        }
        navElement.appendChild(navList);
        domElements.contentElement.appendChild(navElement);
    }

    const init = () => {
        createNav();
    }

    return { init };
}


export default createHeader;