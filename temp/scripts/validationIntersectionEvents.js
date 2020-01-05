import "core-js/modules/es.array.find";
import { getEventsLocal } from './storage.js';

function validationIntersectionEvents(eventStart, eventEnd, idEvent) {
  var existingEvent = getEventsLocal().find(function (event) {
    if (idEvent !== '' && event.id === idEvent) return false;
    if (eventEnd <= event.startDate || eventStart >= event.endDate) return false;
    return true;
  });
  return existingEvent;
}

;
export { validationIntersectionEvents };