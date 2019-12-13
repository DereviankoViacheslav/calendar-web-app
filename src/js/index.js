// import { days } from './days.js';
// import { today } from './days.js';
import { addContentSidebar } from './createSidebar.js';
import { showPopupWindow } from './showPopupWindow.js';
import { createEvent } from './createEvent.js';
import { routingWeeks } from './routingWeeks.js';
import { deleteObjectEvent } from './deleteEvent.js';
// import { nameDay } from './days.js';
// import { right } from './showYearAndMonth.js';
// import { left } from './showYearAndMonth.js';
// import { btnToday } from './showYearAndMonth.js';
import { showWeek } from './showWeek.js';

addContentSidebar();
showPopupWindow();
createEvent();
routingWeeks();
deleteObjectEvent();
// nameDay();
// today();

window.addEventListener('storage', onStorageChange);

function onStorageChange() {
    showWeek();
}