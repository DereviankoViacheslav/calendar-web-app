const events = [
    {
        id: 0,
        name: 'First event',
        createDate: new Date(2019, 12, 4),
        startDate: new Date(2019, 12, 7, 9, 30),
        endDate: new Date(2019, 12, 7, 10, 30),
        description: 'Description text',
    }
];

function getEvents() {
    return events;
};

function addEvent(event) {
    events.push({
        id: event.id,
        name: event.name,
        createDate: new Date(),
        startDate: event.startDate,
        endDate: event.endDate,
        description: event.description,
    });
};

function getEventById(idEvent) {
    return events.find(({ id }) => id === idEvent);
};

function deleteEvent(idEvent) {
    const indexEvent = undefined;
    events.find(({ id }, index) => {
        if (id === idEvent) {
            indexEvent = index;
            return true;
        }
    });
    events.splice(indexEvent, 1);
};

export { getEvents, getEventById, addEvent, deleteEvent };
