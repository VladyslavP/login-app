export function getAuthToken() {
    return localStorage.getItem('AccessToken');
}

export function setAuthToken(token) {
    localStorage.setItem('AccessToken', JSON.stringify(token));
}

export function actionCreator(type, payload) {
    return {
        type,
        payload
    };
}
