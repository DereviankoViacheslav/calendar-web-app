function addDays() {
    const days = document.querySelector('.days');

    let weekday = getLastMonday();
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
};

function getLastMonday() {
    let currentDate = new Date();
    let currentDayOfWeek = currentDate.getDay();
    let lastMonday = undefined;

    if (currentDayOfWeek !== 1) {
        currentDayOfWeek = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1;
        currentDate = currentDate.getTime() - (currentDayOfWeek * 24 * 60 * 60 * 1000);
        lastMonday = new Date(currentDate);
    }

    return lastMonday;
};

function getNextDate(day) {
    let dateInMs = day.getTime();

    return new Date(dateInMs + (24 * 60 * 60 * 1000));
};

export { addDays };