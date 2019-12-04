import {createElements} from './functions.js'

let mas = ['Mon',"Tue","Wen","Tuh","Fri","Sat","Sun"];

const getborder = () => {
    return  createElements(0,1)
            .map(name => `
                <div class="LittleBorder"></div>`).join('');
};

const getNumberDays = () => {
    return  createElements(0,1)
            .map(name => `
                <div class="day_numberDay"></div>`).join('');
};

const getNameDays = () => {
    return  createElements(0,1)
            .map(name => `
                <span class="day_nameDay"></span>`).join('');
};

export function days () {
    const createDays = createElements(0,7)
        .map(day => `
            <div class="day">${getNameDays()} ${getNumberDays()} ${getborder()}</div>`).join('');

    document.querySelector(".week").innerHTML = createDays;
}

export function writing() {
    const nameDay = document.querySelectorAll('.day_nameDay');
    const numberDays = document.querySelectorAll(".day_numberDay");
    var date = new Date();
    let targetDay = 5;
    let targetDate = new Date();
    let delta = targetDay - date.getDay();
    if (delta >= 0) {targetDate.setDate(date.getDate() + delta)}
    else {targetDate.setDate(date.getDate() + 7 + delta)};


    for (let i = 0; i < nameDay.length; i++) {
        nameDay[i].innerHTML = mas[i];
        if (i === 0) {
            numberDays[i].innerHTML = delta;
        }
        numberDays[i].innerHTML = delta++;
    };
};

