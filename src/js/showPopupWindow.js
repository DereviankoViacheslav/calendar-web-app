function showPopupWindow() {
    const scheduleDays = document.querySelector('.days');
    scheduleDays.addEventListener('click', showPopup);

    const popupLayer = document.querySelector('.popup-layer');
    popupLayer.addEventListener('click', showPopup);

    function showPopup(event) {
        if (event.target.classList.contains('popup-layer') ||
            event.target.classList.contains('column-day')) {
            popupLayer.classList.toggle('display-none');
        }
    }
};

export { showPopupWindow };
