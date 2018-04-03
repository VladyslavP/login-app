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

    return fetch(url, { method: 'GET', headers })
        .then(response => response.json());
}
