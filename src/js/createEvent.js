import { addEvent, getEventById } from './storage.js'
import { showEvents } from './showEvents.js';

function createEvent() {
    const btnSave = document.querySelector('.event__btn-save');
    btnSave.addEventListener('click', createObjectEvent);
};

function createObjectEvent(event) {
    event.preventDefault();
    
    const idEvent = document.querySelector('.popup').dataset.idEvent;
    const inputEventName = document.querySelector('.event__name');
    const inputEventDateStart = document.querySelector('.event__date-start');
    const inputEventDateEnd = document.querySelector('.event__date-end');
    const inputEventTimeStart = document.querySelector('.event__time-start');
    const inputEventTimeEnd = document.querySelector('.event__time-end');
    const inputEventDescription = document.querySelector('.event__description');
    
    const eventStartTime = new Date(inputEventDateStart.value + 'T' + inputEventTimeStart.value);
    const eventEndTime = new Date(inputEventDateEnd.value + 'T' + inputEventTimeEnd.value);
    
    let newEvent = {};
    
    if (idEvent === '') {
        newEvent.id = Date.now();
    } else {
        newEvent = getEventById(+idEvent);
    }
    
    newEvent.name = inputEventName.value;
    newEvent.startDate = eventStartTime;
    newEvent.endDate = eventEndTime;
    newEvent.description = inputEventDescription.value;
    
    if (idEvent === '') addEvent(newEvent);
    
    inputEventName.value = '';
    inputEventDateStart.value = '';
    inputEventDateEnd.value = '';
    inputEventTimeStart.value = '';
    inputEventTimeEnd.value = '';
    inputEventDescription.value = '';

    document.querySelector('.popup-layer').classList.toggle('display-none');
    showEvents();
};

export { createEvent };
