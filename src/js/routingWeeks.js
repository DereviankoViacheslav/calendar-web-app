import { createWeek } from './createWeek.js';

function routingWeeks() {
    const arowsRight = document.querySelector('.navigate__arows_right');
    arowsRight.addEventListener('click', moveWeek);
    const arowsLeft = document.querySelector('.navigate__arows_left');
    arowsLeft.addEventListener('click', moveWeek);
    const buttonToday = document.querySelector('.navigate_today');
    buttonToday.addEventListener('click', moveWeek);

    const showedMonday = createWeek(new Date());
    let showedMondayInMs = showedMonday.getTime();
    const sevenDaysInMs = 24 * 60 * 60 * 1000 * 7;

    function moveWeek(event) {
        if (event.target.classList.contains('navigate__arows_right')) {
            showedMondayInMs += sevenDaysInMs;
            createWeek(showedMondayInMs);
        }
        if (event.target.classList.contains('navigate__arows_left')) {
            showedMondayInMs -= sevenDaysInMs;
            createWeek(showedMondayInMs);
        }
        if (event.target.classList.contains('navigate_today')) {
            showedMondayInMs = showedMonday.getTime();
            createWeek(new Date());
        }
    };
};

export { routingWeeks };
