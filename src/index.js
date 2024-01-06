import './style.css';
import { createHeader } from './navbar.js';
import { createAboutPage, createHomePage, createMenuPage } from './pages.js';

createHomePage.init();
createAboutPage.init();
createMenuPage.init();
createHeader.init();
