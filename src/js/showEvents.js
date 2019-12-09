import { getEvents } from './storage.js';
import { showEditPopup } from './showPopupWindow.js';

function showEvents() {
    const days = [...document.querySelectorAll('.column-day')];

    days.map(day => {
        const dateFromAttribute = new Date(day.dataset.date);
        dateFromAttribute.setHours(0, 0, 0, 0);
        const listEventsDay = getEvents().filter(event => {
            const startDateEvent = new Date(event.startDate);
            startDateEvent.setHours(0, 0, 0, 0);
            return dateFromAttribute.getTime() === startDateEvent.getTime();
        });
        day.innerHTML = '';

        day.append(...getListEventsHTML(listEventsDay));
    });
};

function getListEventsHTML(arrEvents) {
    if (arrEvents.length === 0) return '';

    return arrEvents.map(elem => {
        const event = document.createElement('div');
        event.setAttribute('id', elem.id);
        event.classList.add('day-event');
        event.addEventListener('click', showEditPopup);

        const title = document.createElement('div');
        title.textContent = elem.name;

        const timeElem = document.createElement('span');

        const dateElem = document.createElement('div');
        const startYear = elem.startDate.getFullYear();
        const startMonth = elem.startDate.getMonth();
        const startDate = elem.startDate.getDate();
        dateElem.textContent = `${startDate}/${startMonth + 1}/${startYear}`;

        const startHours = elem.startDate.getHours();
        const startMinutes = elem.startDate.getMinutes();
        const endHours = elem.endDate.getHours();
        const endMinutes = elem.endDate.getMinutes();

        const startHoursText = startHours < 10 ? `0${startHours}` : startHours;
        const startMinutesText = startMinutes < 10 ? `0${startMinutes}` : startMinutes;
        const endHoursText = endHours < 10 ? `0${endHours}` : endHours;
        const endMinutesText = endMinutes < 10 ? `0${endMinutes}` : endMinutes;
        timeElem.textContent =
            `${startHoursText}:${startMinutesText} - ${endHoursText}:${endMinutesText}`;

        const valueMinuteMoveY = 42 / 60;
        const startPointY = valueMinuteMoveY * ((startHours * 60) + startMinutes);
        event.style.top = `${startPointY}px`;

        const diffMinutes = (Date.parse(elem.endDate) - Date.parse(elem.startDate)) / (1000 * 60);
        event.style.height = `${valueMinuteMoveY * diffMinutes}px`;

        event.append(title, timeElem, dateElem);
        return event;
    });
};

export { showEvents };
