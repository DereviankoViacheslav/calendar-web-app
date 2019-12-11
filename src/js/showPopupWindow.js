import { getEventById } from './storage.js';
import { createSelectTime } from './createSelectTime.js';

const scheduleDays = document.querySelector('.days');
const navigateCreateButton = document.querySelector('.navigate_create');
const popupLayer = document.querySelector('.popup-layer');
const buttonClose = document.querySelector('.popup__btn-close');
const deleteButton = document.querySelector('.event__btn-delete');
const idEventPopup = document.querySelector('.popup');

const formFields = {
    name: document.querySelector('.event__name'),
    dateStart: document.querySelector('.event__date-start'),
    dateEnd: document.querySelector('.event__date-end'),
    timeStart: document.querySelector('.event__time-start'),
    timeEnd: document.querySelector('.event__time-end'),
    description: document.querySelector('.event__description'),
};

function showPopupWindow() {
    scheduleDays.addEventListener('click', hendlerClick);
    navigateCreateButton.addEventListener('click', showPopup);
    buttonClose.addEventListener('click', showPopup);
    popupLayer.addEventListener('click', hendlerClick);

    Object.values(formFields).map(field => {
        if (!field.classList.contains('event__description')) {
            field.addEventListener('blur', validateValue);
        }
        return field;
    });
};

function hendlerClick(event) {
    if (event.target.classList.contains('popup-layer') ||
        event.target.classList.contains('column-day')) {
        showPopup()
    }
};

function validateValue(event) {
    if (!event.target.value) {
        event.target.classList.add('invalid');
        return;
    }
    event.target.classList.remove('invalid');
};

function showPopup() {
    createSelectTime(formFields.timeStart, formFields.timeEnd);
    popupLayer.classList.toggle('display-none');

    idEventPopup.dataset.idEvent = '';
    Object.values(formFields).map(field => {
        field.classList.remove('invalid');

        if (!field.classList.contains('select')) field.value = '';
    });

    deleteButton.style.display = 'none';
};

function showEditPopup(event) {
    showPopup();
    deleteButton.style.display = 'inline';

    const idEvent = event.target.closest('.day-event').dataset.idEvent;
    idEventPopup.dataset.idEvent = idEvent;
    const selectedEvent = getEventById(+idEvent);

    formFields.name.value = selectedEvent.name;
    formFields.description.value = selectedEvent.description;
    formFields.dateStart.value = dateToString(selectedEvent.startDate);
    formFields.dateEnd.value = dateToString(selectedEvent.endDate);
    formFields.timeStart.value = timeToString(selectedEvent.startDate);
    formFields.timeEnd.value = timeToString(selectedEvent.endDate);
};

function dateToString(date) {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let day = date.getDate();
    day = day < 10 ? '0' + day : day;

    return `${year}-${month}-${day}`;
};

function timeToString(date) {
    let hour = date.getHours();
    hour = hour < 10 ? '0' + hour : hour;
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return `${hour}:${minutes}`;
}

export { showPopupWindow, showEditPopup };
