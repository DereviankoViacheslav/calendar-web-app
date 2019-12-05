import { addEvent } from './storage.js'

function createEvent() {
    const btnSave = document.querySelector('.event__btn-save');
    btnSave.addEventListener('click', createObjectEvent);

    function createObjectEvent() {
        const inputEventName = document.querySelector('.event__name');
        const inputEventDateStart = document.querySelector('.event__date-start');
        const inputEventDateEnd = document.querySelector('.event__date-end');
        const inputEventTimeStart = document.querySelector('.event__time-start');
        const inputEventTimeEnd = document.querySelector('.event__time-end');
        const inputEventDescription = document.querySelector('.event__description');
        const eventName = inputEventName.value;
        const eventDateStart = inputEventDateStart.value;
        const eventDateEnd = inputEventDateEnd.value;
        const eventTimeStart = inputEventTimeStart.value;
        const eventTimeEnd = inputEventTimeEnd.value;
        const eventDescription = inputEventDescription.value;

        const persedDateStart = eventDateStart.split('-');
        const persedDateEnd = eventDateEnd.split('-');
        const persedTimeStart = eventTimeStart.split(':');
        const persedTimeEnd = eventTimeEnd.split(':');

        const eventStart = new Date(
            persedDateStart[0],
            persedDateStart[1] - 1,
            persedDateStart[2],
            persedTimeStart[0],
            persedTimeStart[1],
        );
        const eventEnd = new Date(
            persedDateEnd[0],
            persedDateEnd[1] - 1,
            persedDateEnd[2],
            persedTimeEnd[0],
            persedTimeEnd[1],
        );

        const event = {
            id: Date.now(),
            name: eventName,
            startDate: eventStart,
            endDate: eventEnd,
            description: eventDescription,
        };

        addEvent(event);

        inputEventName.value = '';
        inputEventDateStart.value = '';
        inputEventDateEnd.value = '';
        inputEventTimeStart.value = '';
        inputEventTimeEnd.value = '';
        inputEventDescription.value = '';

        document.querySelector('.popup-layer').classList.toggle('display-none');
    };
};

export { createEvent };
