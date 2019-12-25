import { getEventsList, updateStorage } from './storage.js';
import { addContentSidebar } from './createSidebar.js';
import { showPopupWindow } from './showPopupWindow.js';
import { createEvent } from './createEvent.js';
import { routingWeeks } from './routingWeeks.js';
import { deleteObjectEvent } from './deleteEvent.js';
import { showWeek } from './showWeek.js';
import { showEvents } from './showEvents.js';

addContentSidebar();
showPopupWindow();
createEvent();
routingWeeks();
deleteObjectEvent();

document.addEventListener('DOMContentLoaded', () => {
    getEventsList()
        .then(listEvents => {
            updateStorage('listEvents', listEvents);
            showEvents();
        })
        .catch(err => {
            console.log(err);
            updateStorage('listEvents', []);
        });
});

window.addEventListener('storage', onStorageChange);

function onStorageChange() {
    showWeek();
};
