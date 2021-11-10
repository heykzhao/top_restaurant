import loadHomePage from "./pages/loadHome";
import loadMenuPage from "./pages/loadMenu";
import loadContactPage from "./pages/loadContact";

// CSS importing
import "./styles/reset.css";
import "./styles/fonts.css";
import "./styles/general.css";
import "./styles/header.css";

init();

function init() {
    loadHomePage();
    loadMenuPage();
    loadContactPage();
    addNavEvents();
}

function addNavEvents() {
    const homeTabButton = document.getElementById('home-tab');
    const menuTabButton = document.getElementById('menu-tab');
    const contactTabButton = document.getElementById('contact-tab');

    homeTabButton.addEventListener('click', loadHomePage);
    menuTabButton.addEventListener('click', loadMenuPage);
    contactTabButton.addEventListener('click', loadContactPage);
}