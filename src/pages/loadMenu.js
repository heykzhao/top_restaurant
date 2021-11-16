import Background from '../assets/images/pexels_coffee-shop.jpg';

function clearBodyContainer() {
    const bodyContainer = document.querySelector('.body-container');
    bodyContainer.innerHTML = '';
}

function createMenuItemDrink(title, price) {
    const newMenuItem = document.createElement('div');
    const menuDrinks = document.querySelector('.menu-items-drinks');
    newMenuItem.setAttribute('class', 'menu-item');
    newMenuItem.innerHTML = `
    <div class="menu-item">${title} - ${price}</div>
    `;
    menuDrinks.appendChild(newMenuItem);
}

function createMenuItemSnack(title, price) {
    const newMenuItem = document.createElement('div');
    const menuSnacks = document.querySelector('.menu-items-snacks');
    newMenuItem.setAttribute('class', 'menu-item');
    newMenuItem.innerHTML = `
    <div class="menu-item">${title} - ${price}</div>
    `;
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
    menu.style.backgroundImage = `url(${Background})`;
    menuWrapper.setAttribute('class','menu-wrapper');
    menuDrinks.setAttribute('class', 'menu-drinks');
    menuSnacks.setAttribute('class', 'menu-snacks');

    menuDrinks.innerHTML = `
    <div class='menu-section-title'>
        ━━  DRINKS  ━━
    </div>
    <div class='menu-items-drinks'></div>
    `
    menuSnacks.innerHTML = `
    <div class='menu-section-title'>
        ━━  SNACKS  ━━
    </div>
    <div class='menu-items-snacks'></div>
    `

    bodyContainer.appendChild(menu);
    menu.appendChild(menuWrapper);
    menuWrapper.appendChild(menuDrinks);
    menuWrapper.appendChild(menuSnacks);

    createMenuItemDrink('Pour Over', '$6');
    createMenuItemDrink('Cold Brew', '$5');
    createMenuItemDrink('Espresso', '$2.5');
    createMenuItemDrink('Americano', '$4');
    createMenuItemDrink('Cappucino', '$5');
    createMenuItemDrink('Latte', '$4');
    createMenuItemDrink('Matcha Latte', '$6');
    createMenuItemDrink('Chai Latte', '$6');
    createMenuItemDrink('Breakfast Tea', '$4');
    createMenuItemDrink('Green Tea', '$4');
    createMenuItemDrink('Hot Chocolate', '$4');
    createMenuItemDrink('Sparkling Water', '$4');
    createMenuItemSnack('Yogurt Parfait', '$6');
    createMenuItemSnack('Coffee Cake Muffin', '$5');
    createMenuItemSnack('Chocolate Muffin', '$5');
    createMenuItemSnack('Bagel w/ Cream Cheese', '$5');
    createMenuItemSnack('Cookie', '$3');
    createMenuItemSnack('Mints', '$5');
};

export default loadMenuPage;