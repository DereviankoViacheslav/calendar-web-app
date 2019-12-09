import { addEvent, getEventById } from './storage.js'
import { showEvents } from './showEvents.js';

const formFields = {
    name: document.querySelector('.event__name'),
    dateStart: document.querySelector('.event__date-start'),
    dateEnd: document.querySelector('.event__date-end'),
    timeStart: document.querySelector('.event__time-start'),
    timeEnd: document.querySelector('.event__time-end'),
    description: document.querySelector('.event__description'),
};

const btnSave = document.querySelector('.event__btn-save');

function createEvent() {
    btnSave.addEventListener('click', createObjectEvent);
};

function createObjectEvent(event) {
    event.preventDefault();

    const isValide = Object.values(formFields).find(field => {
        if (!field.value && !field.classList.contains('event__description')) {
            field.classList.add('invalid');
            return true;
        }
    });

    if (isValide) return;

    const idEvent = document.querySelector('.popup').dataset.idEvent;
    const eventStartTime = new Date(formFields.dateStart.value + 'T' + formFields.timeStart.value);
    const eventEndTime = new Date(formFields.dateEnd.value + 'T' + formFields.timeEnd.value);

    let newEvent = null;

    if (idEvent === '') {
        newEvent = { id: Date.now() };
    } else {
        newEvent = getEventById(+idEvent);
    }

    newEvent.name = formFields.name.value;
    newEvent.startDate = eventStartTime;
    newEvent.endDate = eventEndTime;
    newEvent.description = formFields.description.value;

    if (idEvent === '') addEvent(newEvent);

    Object.values(formFields).map(elem => elem.value = '');

    document.querySelector('.popup-layer').classList.toggle('display-none');
    showEvents();
};

export { createEvent };
