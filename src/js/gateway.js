const baseUrl = 'https://crudcrud.com/api/d19131ebc5c0455f9306c82860e73e7d/listEvents';

function getListEventsServer() {
    return fetch(baseUrl)
        .then(response => response.json())
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
