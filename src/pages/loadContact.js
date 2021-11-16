import Background from '../assets/images/pexels_coffee-shop.jpg';

function clearBodyContainer() {
    const bodyContainer = document.querySelector('.body-container');
    bodyContainer.innerHTML = '';
}

function loadContactPage() {
    clearBodyContainer();

    const bodyContainer = document.querySelector('.body-container');
    const contactContainer = document.createElement('div');
    const informationContainer = document.createElement('div');
    const feedbackContainer = document.createElement('div');

    contactContainer.setAttribute('class', 'contact-container');
    contactContainer.style.backgroundImage = `url(${Background})`;
    informationContainer.setAttribute('class', 'information-container');
    feedbackContainer.setAttribute('class', 'feedback-container');

    bodyContainer.appendChild(contactContainer);
    contactContainer.appendChild(informationContainer);
    contactContainer.appendChild(feedbackContainer);
};

export default loadContactPage;