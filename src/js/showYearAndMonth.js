import { days } from './days.js'
import { nameDay } from './days.js'
import { today } from './days.js'

const monthNow = document.querySelector('.monthNow');
const massMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
monthNow.innerHTML = massMonths[new Date().getMonth()];
let newDate = new Date();

window.addEventListener('storage',(e) => {
   newDate = new Date(JSON.parse(e.newValue));
   days(new Date(JSON.parse(e.newValue)))
});

export const right = document.querySelector('.navigate__arows_right').addEventListener('click', () => {
    let nextMonday = newDate.setDate(newDate.getDate() + 7);
    console.log(new Date(nextMonday).getDate())
    const month = document.querySelector('.monthNow');
    days(nextMonday);
    nameDay();
    year();
    nowMonth();
    monthFuture();
    today();
});


export const left = document.querySelector('.navigate__arows_left').addEventListener('click', () => {
    let formerMonday = newDate.setDate(newDate.getDate() - 7);
    days(formerMonday);
    nameDay();
    year();
    nowMonth();
    monthFuture();
    today();
});

export const btnToday = document.querySelector('.navigate_today').addEventListener('click', () => {
    days(new Date());
    newDate = new Date()
    nameDay();
    year();
    nowMonth();
    nowMonth();
    monthFuture();
    today();
});

year();
nowMonth();

window.addEventListener('storage', (e) => {
    let yearNow = new Date(JSON.parse(e.newValue)).getDate();
    nameDay();
    year();
    nowMonth();
    nowMonth();
    monthFuture();
    today();
});

function year() {
    const elemYear = document.querySelectorAll('.day')[0].getAttribute('data-date').slice(0, 4);
    document.querySelector('.year').innerHTML = elemYear;
}

function nowMonth() {
    const elemMonth = document.querySelectorAll('.day')[0].getAttribute('data-date').slice(5);
    document.querySelector('.monthNow').innerHTML = massMonths[+elemMonth];
}

function monthFuture() {
    let futureMonth = document.querySelectorAll('.day')[6].getAttribute('data-date').slice(5);
    const nowMonth = document.querySelectorAll('.day')[0].getAttribute('data-date').slice(5);
    const monthFormerDay = document.querySelectorAll('.day')[5].getAttribute('data-date').slice(5)
    if (document.querySelectorAll('.day_numberDay')[6].innerHTML === '1' && monthFormerDay === futureMonth) {
        document.querySelector('.mounthFutuar').innerHTML = massMonths[+futureMonth++];
    } else {
        document.querySelector('.mounthFutuar').innerHTML = '';
    }
    if (+futureMonth !== +nowMonth) {
        document.querySelector('.mounthFutuar').innerHTML = massMonths[+futureMonth];
    }
}