import { updateStorageLocal } from './localStorageData.js';
import { getListEventsServer } from './gateway.js';
import { addContentSidebar } from './createSidebar.js';
import { showPopupWindow } from './showPopupWindow.js';
import { createEvent } from './createEvent.js';
import { routingWeeks } from './routingWeeks.js';
import { deleteObjectEvent } from './deleteEvent.js';
import { showWeek } from './showWeek.js';

addContentSidebar();
showPopupWindow();
createEvent();
routingWeeks();
deleteObjectEvent();

window.addEventListener('storage', onStorageChange);

function onStorageChange() {
    showWeek();
};

document.addEventListener('DOMContentLoaded', () => {
    getListEventsServer()
        .then(listEvents => {
            if (!listEvents) listEvents = [];
            updateStorageLocal('listEvents', listEvents);
            showWeek();
        })
        .catch(err => console.log(err));
});
