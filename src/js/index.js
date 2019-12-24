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
