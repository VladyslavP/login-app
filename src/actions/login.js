import { actionCreator } from "../common/helpers";
import { LOGIN_REQUEST } from "../actionTypes";

export default function login(data) {
    return actionCreator(LOGIN_REQUEST, data);
}
