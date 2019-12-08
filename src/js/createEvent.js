import { addEvent, getEventById } from './storage.js'
import { showEvents } from './showEvents.js';

const formPopup = {
    name: document.querySelector('.event__name'),
    dateStart: document.querySelector('.event__date-start'),
    dateEnd: document.querySelector('.event__date-end'),
    timeStart: document.querySelector('.event__time-start'),
    timeEnd: document.querySelector('.event__time-end'),
    description: document.querySelector('.event__description'),
};

function createEvent() {
    const btnSave = document.querySelector('.event__btn-save');
    btnSave.addEventListener('click', createObjectEvent);
};

function createObjectEvent(event) {
    event.preventDefault();
    const idEvent = document.querySelector('.popup').dataset.idEvent;
    const eventStartTime = new Date(formPopup.dateStart.value + 'T' + formPopup.timeStart.value);
    const eventEndTime = new Date(formPopup.dateEnd.value + 'T' + formPopup.timeEnd.value);
    
    let newEvent = {};
    
    if (idEvent === '') {
        newEvent.id = Date.now();
    } else {
        newEvent = getEventById(+idEvent);
    }
    
    newEvent.name = formPopup.name.value;
    newEvent.startDate = eventStartTime;
    newEvent.endDate = eventEndTime;
    newEvent.description = formPopup.description.value;
    
    if (idEvent === '') addEvent(newEvent);
    
    Object.values(formPopup).map(elem => elem.value = '');

    document.querySelector('.popup-layer').classList.toggle('display-none');
    showEvents();
};

export { createEvent };
