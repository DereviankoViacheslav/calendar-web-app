import { deleteEvent, getEventById } from './storage';
import { showEvents } from './showEvents';

const deleteButton = document.querySelector('.event__btn-delete');

function deleteObjectEvent() {
  deleteButton.addEventListener('click', deleteSelectedEvent);
}

function deleteSelectedEvent(event) {
  const { idEvent } = event.target.closest('.popup').dataset;

  const selectedEvent = getEventById(idEvent);

  if (selectedEvent.startDate - new Date() < (15 * 60 * 1000) && selectedEvent.endDate > new Date()) {
    alert('Вы не можете удалить событие менее чем за 15 мин до начала и до его окончания!!!!');
    return;
  }

  deleteEvent(idEvent);
  showEvents();
  document.querySelector('.popup-layer').classList.toggle('display-none');
}

export { deleteObjectEvent };
