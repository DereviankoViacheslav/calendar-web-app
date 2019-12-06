const events = [
    {
        id: 0,
        name: 'First week',
        createDate: new Date(2019, 10, 1),
        startDate: new Date(2019, 11, 1, 7, 0),
        endDate: new Date(2019, 11, 1, 9, 45),
        description: 'Description text',
    },
    {
        id: 1,
        name: 'First week',
        createDate: new Date(2019, 10, 1),
        startDate: new Date(2019, 10, 27, 10, 30),
        endDate: new Date(2019, 10, 27, 12, 15),
        description: 'Description text',
    },
    {
        id: 2,
        name: 'Second week',
        createDate: new Date(2019, 10, 1),
        startDate: new Date(2019, 11, 4, 8, 30),
        endDate: new Date(2019, 11, 4, 11, 15),
        description: 'Description text',
    },
    {
        id: 3,
        name: 'Second week',
        createDate: new Date(2019, 10, 1),
        startDate: new Date(2019, 11, 7, 13, 30),
        endDate: new Date(2019, 11, 7, 15, 15),
        description: 'Description text',
    },
    {
        id: 4,
        name: 'Third week',
        createDate: new Date(2019, 10, 1),
        startDate: new Date(2019, 11, 10, 7, 30),
        endDate: new Date(2019, 11, 10, 9, 15),
        description: 'Description text',
    },
    {
        id: 5,
        name: 'Third week',
        createDate: new Date(2019, 10, 1),
        startDate: new Date(2019, 11, 15, 16, 0),
        endDate: new Date(2019, 11, 15, 19, 0),
        description: 'Description text',
    },
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
