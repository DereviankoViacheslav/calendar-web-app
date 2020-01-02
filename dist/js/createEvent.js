import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.filter";
import "core-js/modules/es.array.from";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.function.name";
import "core-js/modules/es.object.get-own-property-descriptor";
import "core-js/modules/es.object.get-own-property-descriptors";
import "core-js/modules/es.object.keys";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.for-each";
import "core-js/modules/web.dom-collections.iterator";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import { addEvent, updateEvent, getEventById } from './storage.js';
import { showEvents } from './showEvents.js';
import { validationIntersectionEvents } from './validationIntersectionEvents.js';
var btnSave = document.querySelector('.event__btn-save');

function createEvent() {
  btnSave.addEventListener('click', createObjectEvent);
}

;

function createObjectEvent(event) {
  event.preventDefault();

  var arrInputs = _toConsumableArray(document.querySelectorAll('.popup input'));

  var invalidFields = arrInputs.filter(function (elem) {
    if (!elem.classList.contains('event__color-picker') && !elem.value) {
      elem.classList.add('invalid');
      return elem;
    }
  });
  if (invalidFields.length > 0) return;
  var popup = document.querySelector('.popup');
  var idEvent = popup.dataset.idEvent;

  var dataInputs = _toConsumableArray(new FormData(popup)).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        field = _ref2[0],
        value = _ref2[1];

    return _objectSpread({}, acc, _defineProperty({}, field, value));
  }, {});

  var eventStartTime = new Date(dataInputs.dateStart + 'T' + dataInputs.timeStart);
  var eventEndTime = new Date(dataInputs.dateEnd + 'T' + dataInputs.timeEnd);
  var newEvent = {};
  if (idEvent !== '') newEvent = getEventById(idEvent);

  if (newEvent.startDate - new Date() > 15 * 60 * 1000) {
    alert('Вы не можете редактировать событие раньше чем за 15 мин до начала!!!!');
    return;
  }

  ;

  if (eventEndTime - eventStartTime > 6 * 60 * 60 * 1000) {
    alert('Событие не может длиться дольше 6-ти часов!!!!');
    return;
  }

  ;

  if (validationIntersectionEvents(eventStartTime, eventEndTime, idEvent)) {
    alert('У Вас уже запланировано событие на это время!!!!');
    return;
  }

  ;
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

;
export { createEvent };