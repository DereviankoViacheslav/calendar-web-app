const daseUrl = 'https://crudcrud.com/api/ad3c49008aa24b7db73bc2572e4f6f28/data';

function updateStorage(key, value) {
    // return fetch(baseUrl, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json;charset=utf-8',
    //     },
    //     body: JSON.stringify(taskData),
    // })
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



// const baseUrl = 'https://crudcrud.com/api/ce9a261481894ed4a43d1236fc4ca3d9/tasks';

// function mapTasks(tasks) {
//     return tasks.map(({ _id, ...rest }) => ({ ...rest, id: _id }));
// }

// function getTasksList() {
//     return fetch(baseUrl)
//         .then(response => response.json())
//         .then(tasks => mapTasks(tasks))
// };

// function creatTask(taskData) {
//     return fetch(baseUrl, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8',
//         },
//         body: JSON.stringify(taskData),
//     })
// };

// function updateTask(taskId, updatedTaskData) {
//     return fetch(`${baseUrl}/${taskId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8',
//         },
//         body: JSON.stringify(updatedTaskData),
//     })
// };

// function deleteTask(taskId) {
//     return fetch(`${baseUrl}/${taskId}`, {
//         method: 'DELETE',
//     })
// };

// export { getTasksList, creatTask, updateTask, deleteTask };