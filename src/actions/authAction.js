import { AsyncStorage } from 'react-native';
import {
    NAME_CHANGED,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from './types';


export const nameChanged = (text) => {
    return {
        type: NAME_CHANGED,
        payload: text
    };
};


export const loginUser = (name) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        AsyncStorage.setItem("user",JSON.stringify(name))
            .then(user => loginUserSuccess(dispatch, user))
            .catch(err => loginuserFail(dispatch, err))
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: LOGIN_USER_SUCCESS });

}

const loginuserFail = (dispatch, error) => {
    dispatch({ type: LOGIN_USER_FAIL });
    alert(error);
};



