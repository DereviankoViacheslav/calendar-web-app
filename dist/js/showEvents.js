import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.filter";
import "core-js/modules/es.array.from";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.map";
import "core-js/modules/es.function.name";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import { getEventsLocal } from './storage.js';
import { showEditPopup } from './showPopupWindow.js';

function showEvents() {
  var days = _toConsumableArray(document.querySelectorAll('.column-day'));

  var listEvents = getEventsLocal();
  days.map(function (day) {
    var weekDay = new Date(day.dataset.date);
    weekDay.setHours(0, 0, 0, 0);
    var currentDay = new Date();
    var listEventsDay = listEvents.filter(function (event) {
      var startDateEvent = new Date(event.startDate);
      var endDateEvent = new Date(event.endDate);
      startDateEvent.setHours(0, 0, 0, 0);
      endDateEvent.setHours(0, 0, 0, 0);
      var isEqualStartDate = weekDay.getTime() === startDateEvent.getTime();
      var isEqualEndDate = weekDay.getTime() === endDateEvent.getTime();
      var isAllDayEvent = weekDay > startDateEvent && weekDay < endDateEvent;
      return isEqualStartDate || isEqualEndDate || isAllDayEvent;
    });
    day.innerHTML = '';

    if (weekDay.setHours(0, 0, 0, 0) === currentDay.setHours(0, 0, 0, 0)) {
      var timeLine = document.createElement('div');
      timeLine.classList.add('redLine');
      day.append(timeLine);
      showCurrentTime(new Date(), timeLine);
      setInterval(function () {
        showCurrentTime(new Date(), timeLine);
      }, 60000);
    }

    day.append.apply(day, _toConsumableArray(getListEventsHTML(listEventsDay, weekDay)));
  });
}

;

function showCurrentTime(currentDate, timeLine) {
  var hour = currentDate.getHours() * 60 + currentDate.getMinutes();
  var heightOneMinute = 42 / 60;
  timeLine.style.top = hour * heightOneMinute + 'px';
}

;

function getListEventsHTML(arrEvents, weekDay) {
  if (arrEvents.length === 0) return '';
  return arrEvents.map(function (elem) {
    var event = document.createElement('div');
    event.setAttribute('data-id-event', elem.id);
    event.classList.add('day-event');
    event.style.backgroundColor = elem.color;
    event.addEventListener('click', showEditPopup);
    var title = document.createElement('div');
    title.classList.add('day-event__title');
    title.textContent = elem.name;
    var timeElem = document.createElement('span');
    var dateElem = document.createElement('div');
    var startYear = elem.startDate.getFullYear();
    var startMonth = elem.startDate.getMonth();
    var startDate = elem.startDate.getDate();
    dateElem.textContent = "".concat(startDate, "/").concat(startMonth + 1, "/").concat(startYear);
    var startHours = elem.startDate.getHours();
    var startMinutes = elem.startDate.getMinutes();
    var endHours = elem.endDate.getHours();
    var endMinutes = elem.endDate.getMinutes();
    var startHoursText = startHours < 10 ? "0".concat(startHours) : startHours;
    var startMinutesText = startMinutes < 10 ? "0".concat(startMinutes) : startMinutes;
    var endHoursText = endHours < 10 ? "0".concat(endHours) : endHours;
    var endMinutesText = endMinutes < 10 ? "0".concat(endMinutes) : endMinutes;
    timeElem.textContent = "".concat(startHoursText, ":").concat(startMinutesText, " - ").concat(endHoursText, ":").concat(endMinutesText);
    var valueMinuteMoveY = 42 / 60;
    var startPointY = 0;

    if (elem.startDate.getTime() > weekDay.getTime()) {
      startPointY = valueMinuteMoveY * (startHours * 60 + startMinutes);
    }

    event.style.top = "".concat(startPointY, "px");
    var diffMinutes = 1;
    var ONE_DAY = 24 * 60 * 60 * 1000;

    if (elem.endDate - weekDay < ONE_DAY) {
      diffMinutes = (elem.endDate - elem.startDate) / (1000 * 60);
    } else {
      diffMinutes = (weekDay.getTime() + ONE_DAY - elem.startDate.getTime()) / (1000 * 60);
    }

    if (elem.startDate < weekDay) {
      diffMinutes = (elem.endDate - weekDay) / (1000 * 60);
    }

    if (elem.startDate < weekDay && elem.endDate > weekDay.getTime() + ONE_DAY) {
      diffMinutes = ONE_DAY / (1000 * 60);
    }

    event.style.height = "".concat(valueMinuteMoveY * diffMinutes, "px");
    event.append(title, timeElem, dateElem);
    return event;
  });
}

;
export { showEvents };