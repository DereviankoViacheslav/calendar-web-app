import { getEvents } from './storage.js';

const scheduleDays = document.querySelector('.days');
const navigateCreateButton = document.querySelector('.navigate_create');
const popupLayer = document.querySelector('.popup-layer');
const buttonClose = document.querySelector('.popup__btn-close');

function showPopupWindow() {
    scheduleDays.addEventListener('click', hendlerClick);
    navigateCreateButton.addEventListener('click', showPopup);
    buttonClose.addEventListener('click', showPopup);
    popupLayer.addEventListener('click', hendlerClick);
};

function hendlerClick(event) {
    if (event.target.classList.contains('popup-layer') ||
        event.target.classList.contains('column-day')) {
        showPopup()
    }
};

function showPopup() {
    popupLayer.classList.toggle('display-none');

    document.querySelector('.popup').dataset.idEvent = '';
    document.querySelector('.event__name').value = '';
    document.querySelector('.event__date-start').value = '';
    document.querySelector('.event__date-end').value = '';
    document.querySelector('.event__time-start').value = '';
    document.querySelector('.event__time-end').value = '';
    document.querySelector('.event__description').value = '';

    const deleteButton = document.querySelector('.event__btn-delete');
    deleteButton.style.display = 'none';
};

function showEditPopup(event) {
    const popupLayer = document.querySelector('.popup-layer');
    popupLayer.classList.toggle('display-none');
    const deleteButton = document.querySelector('.event__btn-delete');
    deleteButton.style.display = 'inline';

    const idEventHTML = document.querySelector('.popup');
    const inputEventName = document.querySelector('.event__name');
    const inputEventDateStart = document.querySelector('.event__date-start');
    const inputEventDateEnd = document.querySelector('.event__date-end');
    const inputEventTimeStart = document.querySelector('.event__time-start');
    const inputEventTimeEnd = document.querySelector('.event__time-end');
    const inputEventDescription = document.querySelector('.event__description');

    const idEvent = event.target.closest('.day-event').getAttribute('id');
    idEventHTML.dataset.idEvent = idEvent;
    const date = event.target.closest('.column-day').dataset.date;

    const selectedEvent = getEvents().find(({ id }) => +idEvent === id);

    let startHours = selectedEvent.startDate.getHours();
    startHours = startHours < 10 ? '0' + startHours : startHours;
    let startMinutes = selectedEvent.startDate.getMinutes();
    startMinutes = startMinutes < 10 ? '0' + startMinutes : startMinutes;

    let endHours = selectedEvent.endDate.getHours();
    endHours = endHours < 10 ? '0' + endHours : endHours;
    let endMinutes = selectedEvent.endDate.getMinutes();
    endMinutes = endMinutes < 10 ? '0' + endMinutes : endMinutes;

    inputEventName.value = selectedEvent.name;
    inputEventDescription.value = selectedEvent.description;
    inputEventDateStart.value = date;
    inputEventDateEnd.value = date;
    inputEventTimeStart.value = startHours + ':' + startMinutes;
    inputEventTimeEnd.value = endHours + ':' + endMinutes;
}

export { showPopupWindow, showEditPopup };
