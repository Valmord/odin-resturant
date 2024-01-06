export const classList = {
    navbar: 'nav-bar',
    homeTab: 'home-tab',
    menuTab: 'menu-tab',
    aboutTab: 'about-tab',

    homePage: 'home-page',
    menuPage: 'menu-page',
    aboutPage: 'about-page',
    
    hidden: 'hidden',


    getElement(cssClass){
        return document.querySelector('.'+cssClass);
    }
}