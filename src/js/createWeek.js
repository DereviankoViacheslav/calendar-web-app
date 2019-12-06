import { showEvents } from './showEvents.js';

function createWeek(startDate) {
    const days = document.querySelector('.days');
    days.innerHTML = '';

    let weekday = getLastMonday(startDate);
    const arrDaysElems = [];

    for (let i = 0; i < 7; i++) {
        const day = document.createElement('div');
        day.classList.add('column-day');
        day.setAttribute('data-date',
            `${weekday.getFullYear()}-${weekday.getMonth() + 1}-${weekday.getDate()}`);
        weekday = getNextDate(weekday);
        arrDaysElems.push(day);
    }

    days.append(...arrDaysElems);
    showEvents();

    return getLastMonday(startDate);
};

function getLastMonday(startDate) {
    let currentDate = new Date(startDate);
    let currentDayOfWeek = currentDate.getDay();
    let lastMonday = undefined;

    if (currentDayOfWeek !== 1) {
        currentDayOfWeek = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1;
        currentDate = currentDate.getTime() - (currentDayOfWeek * 24 * 60 * 60 * 1000);
        lastMonday = new Date(currentDate);
    } else {
        lastMonday = currentDate;
    }

    return lastMonday;
};

function getNextDate(day) {
    let dateInMs = day.getTime();

    return new Date(dateInMs + (24 * 60 * 60 * 1000));
};

export { createWeek };
