import { createElements } from './functions.js'
import { days } from './days.js'
import { writing } from './days.js'
import { today } from './days.js'
import { addContentSidebar } from './createSidebar.js';
import { showPopupWindow } from './showPopupWindow.js';
import { createEvent } from './createEvent.js';
import { routingWeeks } from './routingWeeks.js';

days();
writing();
today();
addContentSidebar();
showPopupWindow();
createEvent();
routingWeeks();
