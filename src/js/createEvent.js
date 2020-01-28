import { addEvent, updateEvent, getEventById } from './storage';
import { showEvents } from './showEvents';
import { formFieldsValidator } from './formFieldsValidator';
import { eventValidator } from './eventValidator';

const btnSave = document.querySelector('.event__btn-save');

function createEvent() {
  btnSave.addEventListener('click', createObjectEvent);
}

function createObjectEvent(event) {
  event.preventDefault();
  const arrInputs = [...document.querySelectorAll('.popup input')];

  if (formFieldsValidator(arrInputs)) return;

  const popup = document.querySelector('.popup');
  const { idEvent } = popup.dataset;

  const dataInputs = [...new FormData(popup)]
    .reduce((acc, [field, value]) => ({ ...acc, [field]: value }), {});

  const eventStartTime = new Date(`${dataInputs.dateStart}T${dataInputs.timeStart}`);
  const eventEndTime = new Date(`${dataInputs.dateEnd}T${dataInputs.timeEnd}`);

  let newEvent = {};

  if (idEvent !== '') newEvent = getEventById(idEvent);

  if (eventValidator(eventStartTime, eventEndTime, idEvent)) return;

  newEvent.name = dataInputs.name;
  newEvent.startDate = eventStartTime;
  newEvent.endDate = eventEndTime;
  newEvent.description = document.querySelector('.event__description').value;
  newEvent.color = dataInputs.color;

  if (idEvent !== '') {
    updateEvent(idEvent, newEvent);
  } else {
    addEvent(newEvent);
  }

  document.querySelector('.popup-layer').classList.toggle('display-none');
  showEvents();
}

export { createEvent };
