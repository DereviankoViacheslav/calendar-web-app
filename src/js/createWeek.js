import { showEvents } from './showEvents.js';

function createWeek(startDate) {
    const days = document.querySelector('.days');
    days.innerHTML = '';

    let weekday = getLastMonday(startDate);
    const arrDaysElems = [];
    
    for (let i = 0; i < 7; i++) {
        const valueDateForAttribute = weekday.getDate() < 10 ? '0' + weekday.getDate() : weekday.getDate();
        const day = document.createElement('div');
        day.classList.add('column-day');
        day.setAttribute('data-date',
            `${weekday.getFullYear()}-${weekday.getMonth() + 1}-${valueDateForAttribute}`);
        weekday = getNextDate(weekday);
        arrDaysElems.push(day);
    }

    days.append(...arrDaysElems);
    showEvents();

    return getLastMonday(startDate);
};

function getLastMonday(currentDate) {
    let date = new Date(currentDate);
    
    return new Date(date.setDate(date.getDate() - (date.getDay() || 7) + 1));
};

function getNextDate(day) {
    let dateInMs = day.getTime();

    return new Date(dateInMs + (24 * 60 * 60 * 1000));
};

export { createWeek };
