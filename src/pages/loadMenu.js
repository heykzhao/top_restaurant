function clearBodyContainer() {
    const bodyContainer = document.querySelector('.body-container');
    bodyContainer.innerHTML = '';
}

function createMenuItemDrink(title, description, price) {
    const newMenuItem = document.createElement('div');
    const menuDrinks = document.querySelector('.menu-items-drinks');
    newMenuItem.setAttribute('class', 'menu-item');
    newMenuItem.innerHTML = `
    <div class="menu-title">${title}</div>
    <div class="menu-description">${description}</div>
    <div class="menu-price">${price}</div>
    `;
    menuDrinks.appendChild(newMenuItem);
}

function createMenuItemSnack(title, description, price) {
    const newMenuItem = document.createElement('div');
    const menuSnacks = document.querySelector('.menu-items-snacks');
    newMenuItem.setAttribute('class', 'menu-item');
    newMenuItem.innerHTML = `
    <div class="menu-title">${title}</div>
    <div class="menu-description">${description}</div>
    <div class="menu-price">${price}</div>
    `
    menuSnacks.appendChild(newMenuItem);
}

function loadMenuPage() {
    clearBodyContainer();

    const bodyContainer = document.querySelector('.body-container');
    const menu = document.createElement('div');
    const menuWrapper = document.createElement('div');
    const menuDrinks = document.createElement('div');
    const menuSnacks = document.createElement('div');

    menu.setAttribute('class','menu-container');
    menuWrapper.setAttribute('class','menu-wrapper');
    menuDrinks.setAttribute('class', 'menu-drinks');
    menuSnacks.setAttribute('class', 'menu-snacks');

    menuDrinks.innerHTML = `
    <div class='menu-section-title-drinks'>
        ━━━━━  DRINKS  ━━━━━
    </div>
    <div class='menu-items-drinks'></div>
    `
    menuSnacks.innerHTML = `
    <div class='menu-section-title-snacks'>
        ━━━━━  SNACKS  ━━━━━
    </div>
    <div class='menu-items-snacks'></div>
    `

    bodyContainer.appendChild(menu);
    menu.appendChild(menuWrapper);
    menuWrapper.appendChild(menuDrinks);
    menuWrapper.appendChild(menuSnacks);

    createMenuItemDrink('test', 'test', 'test');
    createMenuItemDrink('test', 'test', 'test');
    createMenuItemDrink('test', 'test', 'test');
    createMenuItemSnack('test', 'test', 'test');
    createMenuItemSnack('test', 'test', 'test');
    createMenuItemSnack('test', 'test', 'test');
    createMenuItemSnack('test', 'test', 'test');
};

export default loadMenuPage;