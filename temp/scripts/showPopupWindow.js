import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.map";
import "core-js/modules/es.function.name";
import "core-js/modules/es.object.values";
import { getEventById } from './storage.js';
var scheduleDays = document.querySelector('.days');
var navigateCreateButton = document.querySelector('.navigate_create');
var popupLayer = document.querySelector('.popup-layer');
var buttonClose = document.querySelector('.popup__btn-close');
var deleteButton = document.querySelector('.event__btn-delete');
var popup = document.querySelector('.popup');
var formFields = {
  name: document.querySelector('.event__name'),
  dateStart: document.querySelector('.event__date-start'),
  dateEnd: document.querySelector('.event__date-end'),
  timeStart: document.querySelector('.event__time-start'),
  timeEnd: document.querySelector('.event__time-end'),
  description: document.querySelector('.event__description'),
  color: document.querySelector('.event__color-picker')
};

function showPopupWindow() {
  scheduleDays.addEventListener('click', hendlerClick);
  navigateCreateButton.addEventListener('click', showPopup);
  buttonClose.addEventListener('click', showPopup);
  popupLayer.addEventListener('click', hendlerClick);
  formFields.name.addEventListener('blur', validateValue);
  formFields.dateStart.addEventListener('blur', validateValue);
  formFields.dateEnd.addEventListener('blur', validateValue);
  formFields.timeStart.addEventListener('blur', validateValue);
  formFields.timeEnd.addEventListener('blur', validateValue);
}

;

function hendlerClick(event) {
  if (event.target.classList.contains('popup-layer') || event.target.classList.contains('column-day')) {
    showPopup();
  }
}

;

function validateValue(event) {
  if (!event.target.value) {
    event.target.classList.add('invalid');
    return;
  }

  event.target.classList.remove('invalid');
}

;

function showPopup() {
  popupLayer.classList.toggle('display-none');
  popup.dataset.idEvent = '';
  Object.values(formFields).map(function (field) {
    field.classList.remove('invalid');
    field.value = '';

    if (field.classList.contains('event__color-picker')) {
      field.value = '#4183f1';
    }

    ;
  });
  deleteButton.style.display = 'none';
}

;

function showEditPopup(event) {
  showPopup();
  deleteButton.style.display = 'inline';
  var idEvent = event.target.closest('.day-event').dataset.idEvent;
  popup.dataset.idEvent = idEvent;
  var selectedEvent = getEventById(idEvent);
  formFields.name.value = selectedEvent.name;
  formFields.description.value = selectedEvent.description;
  formFields.dateStart.value = dateToString(selectedEvent.startDate);
  formFields.dateEnd.value = dateToString(selectedEvent.endDate);
  formFields.timeStart.value = timeToString(selectedEvent.startDate);
  formFields.timeEnd.value = timeToString(selectedEvent.endDate);
  formFields.color.value = selectedEvent.color;
}

;

function dateToString(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  month = month < 10 ? '0' + month : month;
  var day = date.getDate();
  day = day < 10 ? '0' + day : day;
  return "".concat(year, "-").concat(month, "-").concat(day);
}

;

function timeToString(date) {
  var hour = date.getHours();
  hour = hour < 10 ? '0' + hour : hour;
  var minutes = date.getMinutes();
  minutes = minutes < 10 ? '0' + minutes : minutes;
  return "".concat(hour, ":").concat(minutes);
}

export { showPopupWindow, showEditPopup };