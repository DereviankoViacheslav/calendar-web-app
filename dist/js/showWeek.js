import "core-js/modules/es.array.concat";
import { getShowedMonday } from './storage.js';
import { showEvents } from './showEvents.js';

function showWeek() {
  var days = document.querySelector('.days');
  days.innerHTML = '';
  var weekday = getShowedMonday();
  var arrDaysElems = [];
  var arrMonthes = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var arrNamesWeekdays = ["Mon", "Tue", "Wen", "Tuh", "Fri", "Sat", "Sun"];
  var headerWeek = document.querySelector('.week');
  var titleHeader = document.querySelector('.navigate__MonthAndYear');
  var headerWeekHTML = '';
  var titleHeaderText = '';
  var oldYear = '';
  var oldMonth = '';
  var currentDate = new Date();

  for (var i = 0; i < 7; i++) {
    var valueDateForAttribute = weekday.getDate() < 10 ? '0' + weekday.getDate() : weekday.getDate();
    var day = document.createElement('div');

    if (i === 0) {
      oldYear = weekday.getFullYear();
      oldMonth = weekday.getMonth();
    }

    if (i === 6) {
      oldMonth = oldMonth !== weekday.getMonth() ? arrMonthes[oldMonth] : '';
      oldYear = oldYear !== weekday.getFullYear() ? ' ' + oldYear : '';
      titleHeaderText = "".concat(oldMonth).concat(oldYear).concat(oldMonth ? ' - ' : '').concat(arrMonthes[weekday.getMonth()], " ").concat(weekday.getFullYear());
    }

    var markedDay = new Date(weekday);
    var isToday = markedDay.setHours(0, 0, 0, 0) === currentDate.setHours(0, 0, 0, 0);
    headerWeekHTML += "<div class=\"day\">\n                <span class=\"day_nameDay\">".concat(arrNamesWeekdays[i], "</span>\n                <div class=\"day_numberDay ").concat(isToday ? 'today' : '', "\">").concat(valueDateForAttribute, "</div>\n                <div class=\"LittleBorder\"></div>\n            </div>");
    day.classList.add('column-day');
    var date = "".concat(weekday.getFullYear(), "-").concat(weekday.getMonth() + 1, "-").concat(valueDateForAttribute);
    day.setAttribute('data-date', date);
    weekday = getNextDate(weekday);
    arrDaysElems.push(day);
  }

  titleHeader.textContent = titleHeaderText;
  headerWeek.innerHTML = headerWeekHTML;
  days.append.apply(days, arrDaysElems);
  showEvents();
}

;

function getNextDate(day) {
  var dateInMs = day.getTime();
  return new Date(dateInMs + 24 * 60 * 60 * 1000);
}

;
export { showWeek };