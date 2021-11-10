function createHeader() {
    const content = document.getElementById('content');
    const headerContainer = document.createElement('div');

    headerContainer.setAttribute('class', 'header-container');
    headerContainer.innerHTML = `
        <div class="header-logo noselect">
            <span class="header-logo-capitalize">J</span>ust 
            <span class="header-logo-capitalize">S</span >imple 
            <span class="header-logo-capitalize">C</span>afe
        </div>
        <div class='header-links'>
            <div class='header-link' id="home-tab">HOME</div>
            <div class='header-link' id="menu-tab">MENU</div>
            <div class='header-link' id="contact-tab">CONTACT</div>
        </div>
    `;
    content.appendChild(headerContainer);
}

export default createHeader;