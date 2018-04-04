import { getAuthToken } from "./helpers";

export function getDataAction(url, authHeader = true) {
    const headers = authHeader ? new Headers({
                    'Accept': "application/json",
                    'Authorization': getAuthToken(),
                    'Content-Type': "application/json"
                }) :
                new Headers({
                    'Accept': "application/json",
                    'Content-Type': "application/json"
                });
    return fetch(url, { method: 'GET', headers });
}

export function postDataAction(url, body) {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: new Headers({
            'Accept': "application/json",
            'Content-Type': "application/json"
        })
    })
        .then(response => {
            if (response.status === 201) {
                return Promise.resolve(response.json());
            }
            return Promise.reject(response);
        });
}
