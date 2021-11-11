function clearBodyContainer() {
    const bodyContainer = document.querySelector('.body-container');
    bodyContainer.innerHTML = '';
}

function loadMenuPage() {
    clearBodyContainer();
    console.log('Load menu page');
};

export default loadMenuPage;