import { getEventsList, updateStorage } from './js/storage';
import { addContentSidebar } from './js/createSidebar';
import { showPopupWindow } from './js/showPopupWindow';
import { createEvent } from './js/createEvent';
import { routingWeeks } from './js/routingWeeks';
import { deleteObjectEvent } from './js/deleteEvent';
import { showWeek } from './js/showWeek';
import { showEvents } from './js/showEvents';
import './index.scss';

addContentSidebar();
showPopupWindow();
createEvent();
routingWeeks();
deleteObjectEvent();

document.addEventListener('DOMContentLoaded', () => {
  getEventsList()
    .then((listEvents) => {
      updateStorage('listEvents', listEvents);
      showEvents();
    })
    .catch((err) => {
      console.log(err);
      updateStorage('listEvents', []);
    });
});

window.addEventListener('storage', onStorageChange);

function onStorageChange() {
  showWeek();
}
