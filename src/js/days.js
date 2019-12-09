import {createElements} from './functions.js'
let month = new Date().getMonth();
document.querySelector('.week').setAttribute('month',month);
const massNameDay = ["Sun","Mon","Tue","Wen","Tuh","Fri","Sat"];


function getMonday(startDate) {
    const date = new Date(startDate);
    return new Date(date.setDate(date.getDate() - (date.getDay() || 7) + 1));
};

 function days (date) {
    let monday = getMonday(date);
    const createDays = createElements(0,7)
        .map(elem => 
            `<div class="day">
                <span class="day_nameDay">${massNameDay[elem]}</span>
                <div class="day_numberDay">${new Date(monday.setDate(monday.getDate() + 1))}</div>
                <div class="LittleBorder"></div>
            </div>`).join('');

    document.querySelector(".week").innerHTML = createDays;
};

days(new Date());

let newDate = new Date();
document.querySelector('.navigate__arows_right').addEventListener('click',() => {
    newDate.setDate(newDate.getDate() + 7)
    days(newDate)
});

let collectNumberDay = document.querySelectorAll('.day_numberDay');
function today() {
    let now = new Date().getDate()
    let nowMonth = document.querySelector('.week').getAttribute('month');
    for (let i = 0; i < collectNumberDay.length; i++) {
        if (Number(nowMonth) ===  new Date().getMonth() && +collectNumberDay[i].innerHTML === Number(now)) {
            collectNumberDay[i].classList.add('today')
        } else {
            collectNumberDay[i].classList.remove('today')
        }
    }  
}
today()