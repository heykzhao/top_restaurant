import Background from '../assets/images/pexels_coffee-shop.jpg';


function clearBodyContainer() {
    const bodyContainer = document.querySelector('.body-container');
    bodyContainer.innerHTML = '';
}

function loadHomePage() {
    clearBodyContainer();
    const bodyContainer = document.querySelector('.body-container');
    const coffeeShopBackgroundImage = document.createElement('div');
    coffeeShopBackgroundImage.setAttribute('class','home-background-image noselect');
    coffeeShopBackgroundImage.style.backgroundImage = `url(${Background})`;
    bodyContainer.appendChild(coffeeShopBackgroundImage);
};

export default loadHomePage;