import Logo from '../assets/images/GitHub-Mark-32px.png';

const content = document.getElementById('content');

function createHeader() {
    const headerContainer = document.createElement('div');
    headerContainer.setAttribute('class', 'header-container');
    headerContainer.innerHTML = `
        <div class="header-logo noselect">
            <span class="header-logo-capitalize">J</span>ust 
            <span class="header-logo-capitalize">S</span >imple 
            <span class="header-logo-capitalize">C</span>afe
        </div>
        <div class='header-links noselect'>
            <div class='header-link' id="home-tab">HOME</div>
            <div class='header-link' id="menu-tab">MENU</div>
            <div class='header-link' id="contact-tab">CONTACT</div>
        </div>
    `;
    content.appendChild(headerContainer);
}

function createBody() {
    const bodyContainer = document.createElement('div');
    bodyContainer.setAttribute('class', 'body-container');
    content.appendChild(bodyContainer);
}

function createFooter() {
    const footerContainer = document.createElement('div');
    footerContainer.setAttribute('class', 'footer-container');
    footerContainer.innerHTML = `
        <div class='nameplate noselect'>
            <span class='copyright'>Made by <a href='https://github.com/heykzhao' target='_blank'>heykzhao</a></span>
            <span>
               <a href='https://github.com/heykzhao' target='_blank'><img src=${Logo} class='github-logo'></a>
            </span>
    </div>
    `;
    content.appendChild(footerContainer);
}

function createInitialPage() {
    createHeader();
    createBody();
    createFooter();
}

export default createInitialPage;

