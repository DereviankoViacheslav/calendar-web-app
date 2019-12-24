function updateStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};

function getItemStorage(key) {
    return JSON.parse(localStorage.getItem(key), reviver);
};

function reviver(key, value) {
    if (['createDate', 'startDate', 'endDate'].includes(key)) {
        return new Date(value);
    }

    return value;
};

function setShowedMonday(showedMonday) {
    updateStorage('showedMonday', showedMonday);
};

function getShowedMonday() {
    if (getItemStorage('showedMonday')) {
        return new Date(getItemStorage('showedMonday'));
    }
    return getItemStorage('showedMonday');
};

function getEvents() {
    return getItemStorage('listEvents') || [];
};

function addEvent(event) {
    const listEvents = getEvents();
    listEvents.push({
        id: event.id,
        name: event.name,
        createDate: new Date(),
        startDate: event.startDate,
        endDate: event.endDate,
        description: event.description,
        color: event.color,
    });
    updateStorage('listEvents', listEvents)
};

function getEventById(idEvent) {
    return getEvents().find(({ id }) => id === idEvent);
};

function deleteEvent(idEvent) {
    const listEvents = getEvents();
    let indexEvent = undefined;
    listEvents.find(({ id }, index) => {
        if (id === idEvent) {
            indexEvent = index;
            return true;
        }
    });
    listEvents.splice(indexEvent, 1);

    updateStorage('listEvents', listEvents)
};

export { getEvents, getEventById, addEvent, deleteEvent, getShowedMonday, setShowedMonday };
