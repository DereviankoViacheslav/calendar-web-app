import { addEvent } from './storage.js'
import { showEvents } from './showEvents.js';

function createEvent() {
    const btnSave = document.querySelector('.event__btn-save');
    btnSave.addEventListener('click', createObjectEvent);
    
    function createObjectEvent(ev) {
        ev.preventDefault();
        const inputEventName = document.querySelector('.event__name');
        const inputEventDateStart = document.querySelector('.event__date-start');
        const inputEventDateEnd = document.querySelector('.event__date-end');
        const inputEventTimeStart = document.querySelector('.event__time-start');
        const inputEventTimeEnd = document.querySelector('.event__time-end');
        const inputEventDescription = document.querySelector('.event__description');

        const eventStart = new Date(inputEventDateStart.value + 'T' + inputEventTimeStart.value);
        const eventEnd = new Date(inputEventDateEnd.value + 'T' + inputEventTimeEnd.value);

        const event = {
            id: Date.now(),
            name: inputEventName.value,
            startDate: eventStart,
            endDate: eventEnd,
            description: inputEventDescription.value,
        };

        addEvent(event);

        inputEventName.value = '';
        inputEventDateStart.value = '';
        inputEventDateEnd.value = '';
        inputEventTimeStart.value = '';
        inputEventTimeEnd.value = '';
        inputEventDescription.value = '';

        document.querySelector('.popup-layer').classList.toggle('display-none');
        showEvents();
    };
};

export { createEvent };
