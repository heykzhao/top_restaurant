import createInitialPage from "./pages/loadInitial";
import loadHomePage from "./pages/loadHome";
import loadMenuPage from "./pages/loadMenu";
import loadContactPage from "./pages/loadContact";

// CSS importing
import "./styles/reset.css";
import "./styles/fonts.css";
import "./styles/general.css";
import "./styles/header-footer.css";
import "./styles/homepage.css";
import "./styles/menupage.css";
import "./styles/contactpage.css";

init();

function navButtons() {
    const homePageButton = document.getElementById('home-tab');
    const menuPageButton = document.getElementById('menu-tab');
    const contactPageButton = document.getElementById('contact-tab');
    homePageButton.addEventListener('click', loadHomePage);
    menuPageButton.addEventListener('click', loadMenuPage);
    contactPageButton.addEventListener('click', loadContactPage);
}

function init() {
    createInitialPage();
    navButtons();
    loadHomePage();
}