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
    const createDays = createElements()
        .map(elem => 
            `<div class="day">
                <span class="day_nameDay"></span>
                <div class="day_numberDay">${new Date(monday.setDate(monday.getDate() + elem)).getDate()}</div>
                <div class="LittleBorder"></div>
            </div>`).join('');

    document.querySelector(".week").innerHTML = createDays;
};

days(new Date());
nameDay();

let newDate = new Date();

document.querySelector('.navigate__arows_right').addEventListener('click',() => {
    newDate.setDate(newDate.getDate() + 7);
    days(newDate);
    nameDay();
});

document.querySelector('.navigate__arows_left').addEventListener('click',() => {
    newDate.setDate(newDate.getDate() - 7);
    days(newDate);
    nameDay();
});

function nameDay() {
    let day = document.querySelectorAll('.day_nameDay');
    for (let i = 0; i < day.length; i++) {
        day[i].innerHTML = massNameDay[i]
    }
};

let collectNumberDay = document.querySelectorAll('.day_numberDay');
