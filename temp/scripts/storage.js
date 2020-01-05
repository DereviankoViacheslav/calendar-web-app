import "core-js/modules/es.symbol";
import "core-js/modules/es.array.filter";
import "core-js/modules/es.array.index-of";
import "core-js/modules/es.array.map";
import "core-js/modules/es.object.get-own-property-descriptor";
import "core-js/modules/es.object.get-own-property-descriptors";
import "core-js/modules/es.object.keys";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.promise";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/web.dom-collections.for-each";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { getEventsLocal, deleteEventLocal, getEventById, updateStorage, getShowedMonday, setShowedMonday } from './localStorageData.js';
import { showEvents } from './showEvents.js';
var baseUrl = 'https://crudcrud.com/api/c91c72e0f5ff46a98a9e7ed0fd25e0aa/listEvents';

function mapEvents(tasks) {
  return tasks.map(function (_ref) {
    var _id = _ref._id,
        rest = _objectWithoutProperties(_ref, ["_id"]);

    return _objectSpread({}, rest, {
      id: _id
    });
  });
}

;

function getEventsList() {
  return fetch(baseUrl).then(function (response) {
    return response.json();
  }).then(function (tasks) {
    return mapEvents(tasks);
  });
}

;

function addEvent(event) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(event)
  }).then(function (response) {
    return response.json();
  }).then(function (resEvent) {
    var listEvents = getEventsLocal();
    listEvents.push(_objectSpread({}, event, {
      id: resEvent._id,
      createDate: new Date()
    }));
    updateStorage('listEvents', listEvents);
    showEvents();
  }).catch(function (err) {
    console.log(err);
    var listEvents = getEventsLocal();
    listEvents.push(_objectSpread({}, event, {
      id: Date.now().toString(),
      createDate: new Date()
    }));
    updateStorage('listEvents', listEvents);
    showEvents();
  });
}

;

function updateEvent(eventId, updatedEvenytData) {
  deleteEventLocal(eventId);
  var listEvents = getEventsLocal();
  listEvents.push(_objectSpread({}, updatedEvenytData, {
    createDate: new Date()
  }));
  updateStorage('listEvents', listEvents);
  return fetch("".concat(baseUrl, "/").concat(eventId), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(updatedEvenytData)
  }).catch(function (err) {
    return console.log(err);
  });
}

;

function deleteEvent(idEvent) {
  deleteEventLocal(idEvent);
  return fetch("".concat(baseUrl, "/").concat(idEvent), {
    method: 'DELETE'
  }).catch(function (err) {
    return console.log(err);
  });
}

;
export { getEventsLocal, getEventById, updateEvent, addEvent, deleteEvent, getShowedMonday, setShowedMonday, updateStorage, getEventsList };