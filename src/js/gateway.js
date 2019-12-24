const baseUrl = 'https://crudcrud.com/api/d2d1bdf8567f471595933584dce66401/listEvents';

function mapEvents(events) {
    return events.map(({ _id, ...rest }) => ({ ...rest, id: _id }));
}

function getListEventsServer() {
    return fetch(baseUrl)
        .then(response => response.json())
        .then(events => mapEvents(events))
        .catch(err => console.log(err));
};

function addEventServer(event) {

    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(event),
    });
};

function updateEventsServer(idEvent, updatedListEvents) {
    return fetch(`${baseUrl}/${idEvent}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(updatedListEvents),
    })
};

function deleteEventServer(idEvent) {
    return fetch(`${baseUrl}/${idEvent}`, {
        method: 'DELETE',
    })
};

export { getListEventsServer, addEventServer, updateEventsServer, deleteEventServer };
