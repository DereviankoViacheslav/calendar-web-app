import { getEventsLocal, getEventByIdLocal, addEventLocal, deleteEventLocal, getShowedMonday, setShowedMonday, updateStorageLocal } from './localStorageData.js';
import { getListEventsServer, addEventServer, updateEventsServer, deleteEventServer } from './gateway.js';

function getEvents() {
    return getEventsLocal();
};

function addEvent(event) {
    addEventServer(event)
        .then(event => addEventLocal(event.json()))
        .catch(err => {
            addEventLocal(event);
            console.log(err)
        });
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
