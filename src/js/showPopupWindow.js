import { getEvents, getEventById } from './storage.js';

const scheduleDays = document.querySelector('.days');
const navigateCreateButton = document.querySelector('.navigate_create');
const popupLayer = document.querySelector('.popup-layer');
const buttonClose = document.querySelector('.popup__btn-close');
const deleteButton = document.querySelector('.event__btn-delete');
const idEventPopup = document.querySelector('.popup');
const btnSave = document.querySelector('.event__btn-save');

const formPopup = {
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
};

function hendlerClick(event) {
    if (event.target.classList.contains('popup-layer') ||
        event.target.classList.contains('column-day')) {
        showPopup()
    }
};

function showPopup() {
    btnSave.setAttribute("disabled", "disabled");
    popupLayer.classList.toggle('display-none');

    idEventPopup.dataset.idEvent = '';
    Object.values(formPopup).map(elem => elem.value = '');

    deleteButton.style.display = 'none';
};

function showEditPopup(event) {
    btnSave.removeAttribute('disabled');
    popupLayer.classList.toggle('display-none');
    deleteButton.style.display = 'inline';

    const idEvent = event.target.closest('.day-event').dataset.idEvent;
    idEventPopup.dataset.idEvent = idEvent;
    const selectedEvent = getEventById(+idEvent);
    
    const startEventYear = selectedEvent.startDate.getFullYear();

    let startEventMonth = selectedEvent.startDate.getMonth() + 1;
    startEventMonth = startEventMonth < 10 ? '0' + startEventMonth : startEventMonth;

    let startEventDate = selectedEvent.startDate.getDate();
    startEventDate = startEventDate < 10 ? '0' + startEventDate : startEventDate;

    const endEventYear = selectedEvent.endDate.getFullYear();

    let endEventMonth = selectedEvent.endDate.getMonth() + 1;
    endEventMonth = endEventMonth < 10 ? '0' + endEventMonth : endEventMonth;

    let endEventDate = selectedEvent.endDate.getDate();
    endEventDate = endEventDate < 10 ? '0' + endEventDate : endEventDate;

    let startHours = selectedEvent.startDate.getHours();
    startHours = startHours < 10 ? '0' + startHours : startHours;
    let startMinutes = selectedEvent.startDate.getMinutes();
    startMinutes = startMinutes < 10 ? '0' + startMinutes : startMinutes;

    let endHours = selectedEvent.endDate.getHours();
    endHours = endHours < 10 ? '0' + endHours : endHours;
    let endMinutes = selectedEvent.endDate.getMinutes();
    endMinutes = endMinutes < 10 ? '0' + endMinutes : endMinutes;

    formPopup.name.value = selectedEvent.name;
    formPopup.description.value = selectedEvent.description;
    formPopup.dateStart.value = `${startEventYear}-${startEventMonth}-${startEventDate}`;
    formPopup.dateEnd.value = `${endEventYear}-${endEventMonth}-${endEventDate}`;
    formPopup.timeStart.value = startHours + ':' + startMinutes;
    formPopup.timeEnd.value = endHours + ':' + endMinutes;
}

export { showPopupWindow, showEditPopup };
