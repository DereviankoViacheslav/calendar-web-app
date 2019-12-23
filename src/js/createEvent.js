import { addEvent, getEventById, deleteEvent } from './storage.js';
import { showEvents } from './showEvents.js';
import { validationIntersectionEvents } from './validationIntersectionEvents.js';

const formFields = {
    name: document.querySelector('.event__name'),
    dateStart: document.querySelector('.event__date-start'),
    dateEnd: document.querySelector('.event__date-end'),
    timeStart: document.querySelector('.event__time-start'),
    timeEnd: document.querySelector('.event__time-end'),
    description: document.querySelector('.event__description'),
    color: document.querySelector('.event__color-picker'),
};

const btnSave = document.querySelector('.event__btn-save');

function createEvent() {
    btnSave.addEventListener('click', createObjectEvent);
};

function createObjectEvent(event) {
    event.preventDefault();

    const invalidFields = Object.values(formFields).find(field => {
        if (!field.classList.contains('event__description') &&
            !field.classList.contains('event__color-picker') &&
            !field.value) {
            field.classList.add('invalid');
            return true;
        }
    });

    if (invalidFields) return;

    const idEvent = document.querySelector('.popup').dataset.idEvent;
    const eventStartTime = new Date(formFields.dateStart.value + 'T' + formFields.timeStart.value);
    const eventEndTime = new Date(formFields.dateEnd.value + 'T' + formFields.timeEnd.value);

    let newEvent = null;

    if (idEvent === '') {
        newEvent = { id: Date.now() };
    } else {
        newEvent = getEventById(+idEvent);
    }

    if (newEvent.startDate - new Date() > (15 * 60 * 1000)) {
        alert('Вы не можете редактировать событие раньше чем за 15 мин до начала!!!!');
        return;
    };

    if (eventEndTime - eventStartTime > (6 * 60 * 60 * 1000)) {
        alert('Событие не может длиться дольше 6-ти часов!!!!');
        return;
    };

    if (validationIntersectionEvents(eventStartTime, eventEndTime, idEvent)) {
        alert('У Вас уже запланировано событие на это время!!!!');
        return;
    };

    newEvent.name = formFields.name.value;
    newEvent.startDate = eventStartTime;
    newEvent.endDate = eventEndTime;
    newEvent.description = formFields.description.value;
    newEvent.color = formFields.color.value;

    if (idEvent !== '') deleteEvent(+idEvent);

    addEvent(newEvent)

    document.querySelector('.popup-layer').classList.toggle('display-none');
    showEvents();
};

export { createEvent };
