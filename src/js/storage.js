import { getEventsLocal, getEventByIdLocal, addEventLocal, deleteEventLocal, getShowedMonday, setShowedMonday } from './localStorageData.js';
import { getListEventsServer, addEventServer, updateEventsServer, deleteEventServer } from './gateway.js';

function getEvents() {
    let events = [];
    getListEventsServer()
        .then(listEvents => events = listEvents)
        .catch((err) => events = getEventsLocal());
    return events;
};

function addEvent(event) {
    addEventServer(event)
        .catch(err => console.log(err));
    addEventLocal(event);
};

function getEventById(idEvent) {
    return getEvents().find(({ id }) => id === idEvent);
};

function deleteEvent(idEvent) {
    deleteEventServer(idEvent)
        .catch(err => console.log(err));
    deleteEventLocal(idEvent);
};

export { getEvents, getEventById, addEvent, deleteEvent, getShowedMonday, setShowedMonday };
