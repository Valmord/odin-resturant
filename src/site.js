
const domElements = {
    contentElement: document.querySelector('#content'),
}

function createPageElements() {
    const createNav = () => {
        const tabNames = ['Home', 'Menu', 'About'];
        const navElement = document.createElement('nav');
        const navHeaderElement = document.createElement('h1');
        navHeaderElement.textContent = 'The Krusty Krab';
        navElement.appendChild(navHeaderElement);
        
        const navList = document.createElement('ul'); 
        for (let i = 0; i < tabNames.length; i++){
            const navListItem = document.createElement('li');
            navListItem.textContent = tabNames[i];
            navList.appendChild(navListItem);
        }
        
        navElement.appendChild(navList);

        domElements.contentElement.appendChild(navElement);
    }

    const init = () => {
        createNav();
    }

    const sayHello = () => {
        alert('Hello');
    }

    return { init, sayHello };
}



function showHomePage(){

}

export default createPageElements;