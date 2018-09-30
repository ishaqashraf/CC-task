import { Actions } from 'react-native-router-flux';
// import { auth,fireStore,fireBase } from '../components/fireBase';

import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
} from './types';


export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        // auth.signInWithEmailAndPassword(email, password)
        //     .then(user => loginUserSuccess(dispatch, user))
        //     .catch((error) => {
        //         loginuserFail(dispatch, error);
        //     });
    };
};


const loginuserFail = (dispatch, error) => {
    dispatch({ type: LOGIN_USER_FAIL });
    Toast.show(error.message, Toast.SHORT)
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    Toast.show('Successfully Login', Toast.SHORT)
    Actions.main()
}

