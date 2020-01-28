import { getEventsLocal } from './storage';

function eventValidator(eventStart, eventEnd, idEvent) {

  if (eventStart - new Date() < (15 * 60 * 1000) && eventEnd > new Date()) {
    alert('Вы не можете изменить/отменить событие за 15 мин до начала!!!!');
    return true;
  }

  if (eventEnd - eventStart > (6 * 60 * 60 * 1000)) {
    alert('Событие не может длиться дольше 6-ти часов!!!!');
    return true;
  }

  const existingEvent = getEventsLocal().find((event) => {
    if (idEvent !== '' && event.id === idEvent) return false;
    if (eventEnd <= event.startDate || eventStart >= event.endDate) return false;
    alert('У Вас уже запланировано событие на это время!!!!');
    return true;
  });
  return existingEvent;
}

export { eventValidator };
