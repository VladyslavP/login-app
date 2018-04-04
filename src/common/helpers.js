export function getAuthToken() {
    return localStorage.getItem('AccessToken');
}

export function setAuthToken(token) {
    localStorage.setItem('AccessToken', token);
}

export function removeAuthToken() {
    localStorage.removeItem('AccessToken');
}

export function actionCreator(type, payload) {
    return {
        type,
        payload
    };
}
