import Background from '../assets/images/pexels_coffee-shop.jpg';


function clearBodyContainer() {
    const bodyContainer = document.querySelector('.body-container');
    bodyContainer.innerHTML = '';
}

function loadHomePage() {
    clearBodyContainer();
    const bodyContainer = document.querySelector('.body-container');
    const homeContainer = document.createElement('div');
    const homeFocus = document.createElement('div');

    homeContainer.setAttribute('class','home-background-image noselect');
    homeContainer.style.backgroundImage = `url(${Background})`;
    homeFocus.setAttribute('class', 'home-focus');

    homeFocus.innerHTML = `
    <div class='home-header'>WELCOME</div>
    <div class='home-subheader'>Come work, play, relax.</div>
    <div class='home-subtext'>Enjoy our incredibly delicious coffee, tea, and snacks. Stay however long you want. </div>
    <button class='menu-CTA'>View Menu ►</button>
    `

    bodyContainer.appendChild(homeContainer);
    homeContainer.appendChild(homeFocus);

};

export default loadHomePage;