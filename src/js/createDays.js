function addDays() {
    const days = document.querySelector('.days');
    const arrDaysElems = [];
    
    for (let i = 0; i < 7; i++) {
        const day = document.createElement('div');
        day.classList.add('column-day');
        arrDaysElems.push(day);
    }
    
    days.append(...arrDaysElems);
};

export { addDays };