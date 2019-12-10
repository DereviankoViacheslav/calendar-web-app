import {createElements} from './functions.js'
let month = new Date().getMonth();
document.querySelector('.week').setAttribute('data-month',month);
const massNameDay = ["Mon","Tue","Wen","Tuh","Fri","Sat","Sun"];

function getMonday(startDate) {
    const date = new Date(startDate);
    return new Date(date.setDate(date.getDate() - (date.getDay() || 7) + 1));
};

export function days (date) {
    let monday = getMonday(date);
    let mass = []
    const createDays = createElements()
        .map(elem => 
            `<div class="day" data-date="${monday.getFullYear()}-${monday.getMonth()}">
                <span class="day_nameDay"></span>
                <div class="day_numberDay">${new Date(monday.setDate(monday.getDate() + elem)).getDate()}</div>
                <div class="LittleBorder"></div>
            </div>`).join('');

    document.querySelector(".week").innerHTML = createDays;
};

days(new Date());
nameDay();

export function nameDay() {
    let day = document.querySelectorAll('.day_nameDay');
    for (let i = 0; i < day.length; i++) {
        day[i].innerHTML = massNameDay[i];
    }
};

