import { createElements } from './functions.js'
import { days } from './days.js'
import { addContentSidebar } from './createSidebar.js';
import { showPopupWindow } from './showPopupWindow.js';
import { createEvent } from './createEvent.js';
import { routingWeeks } from './routingWeeks.js';
import { deleteObjectEvent } from './deleteEvent.js';

addContentSidebar();
showPopupWindow();
createEvent();
routingWeeks();
deleteObjectEvent();
