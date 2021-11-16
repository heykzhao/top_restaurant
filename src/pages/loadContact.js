import Background from '../assets/images/pexels_coffee-shop.jpg';

function clearBodyContainer() {
    const bodyContainer = document.querySelector('.body-container');
    bodyContainer.innerHTML = '';
}

function loadContactPage() {
    clearBodyContainer();

    const bodyContainer = document.querySelector('.body-container');
    const contactContainer = document.createElement('div');
    const contactWrapper = document.createElement('div');
    const informationContainer = document.createElement('div');
    const feedbackContainer = document.createElement('div');

    contactContainer.setAttribute('class', 'contact-container');
    contactContainer.style.backgroundImage = `url(${Background})`;
    contactWrapper.setAttribute('class', 'contact-wrapper');
    informationContainer.setAttribute('class', 'information-container');

    informationContainer.innerHTML = `
        <div class="contact-title">🕰 Hours of Operation</div>
        <div class="contact-detail">Mon-Fri, 7AM - 11PM</div>
        <div class="contact-detail">Sat-Sun, 8AM - 9PM</div>
        <div class="contact-title"><a href='href="tel:+1-708-851-0223' target="_blank" rel="noopener noreferrer">📞 703-851-0223</a></div>
        <div class="contact-title"><a href='https://goo.gl/maps/QPJh1P3h6kf5SWX16' target="_blank" rel="noopener noreferrer">🏙 3100 Wilson Blvd, Arlington, VA 22201</a></div>
        <iframe class='contact-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.613010094713!2d-77.09741828424232!3d38.887094979572225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b6842037b183%3A0xd3ee3ff13f5db318!2s3100%20Wilson%20Blvd%2C%20Arlington%2C%20VA%2022201!5e0!3m2!1sen!2sus!4v1637095867212!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe>
    `

    bodyContainer.appendChild(contactContainer);
    contactContainer.appendChild(contactWrapper);
    contactWrapper.appendChild(informationContainer);
};

export default loadContactPage;