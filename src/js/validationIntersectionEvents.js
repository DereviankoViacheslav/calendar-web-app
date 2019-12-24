import { getEvents } from './storage.js';

function validationIntersectionEvents(eventStart, eventEnd, idEvent ) {

    const existingEvent = getEvents().find(event => {
        // console.log(event.id === idEvent);
        // console.log(event.id);
        // console.log(idEvent);
        
        if (idEvent !== '' && event.id === idEvent) return false;
        if (eventEnd <= event.startDate || eventStart >= event.endDate) return false;
        return true;
    });

    return existingEvent;
};

export { validationIntersectionEvents };