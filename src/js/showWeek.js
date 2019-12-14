import { getShowedMonday } from './storage.js';
import { showEvents } from './showEvents.js';

function showWeek() {
    const days = document.querySelector('.days');
    days.innerHTML = '';

    let weekday = getShowedMonday();
    const arrDaysElems = [];

    for (let i = 0; i < 7; i++) {
        const valueDateForAttribute = weekday.getDate() < 10 ? '0' + weekday.getDate() : weekday.getDate();
        const day = document.createElement('div');
        day.classList.add('column-day');
        const date = `${weekday.getFullYear()}-${weekday.getMonth() + 1}-${valueDateForAttribute}`;
        day.setAttribute('data-date', date);
        weekday = getNextDate(weekday);
        arrDaysElems.push(day);
    }

    days.append(...arrDaysElems);
    showEvents();
};

function getNextDate(day) {
    let dateInMs = day.getTime();
    
    return new Date(dateInMs + (24 * 60 * 60 * 1000));
};

export { showWeek };