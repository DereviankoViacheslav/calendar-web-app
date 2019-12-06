import { createElements } from './functions.js'
import { days } from './days.js'
import { writing } from './days.js'
import { today } from './days.js'
import { addContentSidebar } from './createSidebar.js';
import { addDays } from './createDays.js';
import { showPopupWindow } from './showPopupWindow.js';
import { createEvent } from './createEvent.js';
import { showEvents } from './showEvents.js';

days();
writing();
today();
addContentSidebar();
addDays();
showPopupWindow();
createEvent();
showEvents();