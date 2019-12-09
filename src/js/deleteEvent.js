import { deleteEvent } from './storage.js';
import { showEvents } from './showEvents.js';

const deleteButton = document.querySelector('.event__btn-delete');

function deleteObjectEvent() {
    deleteButton.addEventListener('click', deleteSelectedEvent);
};

function deleteSelectedEvent(event) {
    const idEvent = event.target.closest('.popup').dataset.idEvent;
    deleteEvent(+idEvent);
    showEvents();
    document.querySelector('.popup-layer').classList.toggle('display-none');
}

export { deleteObjectEvent };
