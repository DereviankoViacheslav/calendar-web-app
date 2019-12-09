import {days} from './days.js'
import {nameDay} from './days.js'

const monthNow = document.querySelector('.monthNow');
const massMonths = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
monthNow.innerHTML = massMonths[new Date().getMonth()];
let newDate = new Date();

document.querySelector('.navigate__arows_right').addEventListener('click',() => {
    let nextMonday = newDate.setDate(newDate.getDate() + 7);
    days(nextMonday);
    nameDay();
});

document.querySelector('.navigate__arows_left').addEventListener('click',() => {
    let formerMonday =  newDate.setDate(newDate.getDate() - 7);
    days(formerMonday);
    nameDay();
});

document.querySelector('.navigate_today').addEventListener('click',() => {
    days(new Date());
    newDate = new Date()
    nameDay();
});