import './style.css';
import { createHeader } from './navbar.js';
import { createAboutPage, createHomePage, createMenuPage } from './pages.js';

createHeader.init();
createHomePage.init();
createAboutPage.init();
createMenuPage.init();