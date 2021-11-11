
function clearBodyContainer() {
    const bodyContainer = document.querySelector('.body-container');
    bodyContainer.innerHTML = '';
}

function loadContactPage() {
    clearBodyContainer();
    console.log('Load contact page');
};

export default loadContactPage;