import { AsyncStorage } from 'react-native';
import {
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_FAIL,
    LOGOUT,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL
} from './types';


export const getUser = () => {
    return (dispatch) => {
        dispatch({ type: GET_USER });
        try {
            AsyncStorage.getItem("user")
                .then((value) => {
                    getUserSuccess(dispatch, value);
                })
        } catch (error) {
            getUserFail(dispatch, error);
        }
    };
};

export const logout = () => {
    return (dispatch) => {
        dispatch({ type: LOGOUT });
        try {
            AsyncStorage.removeItem("user");
            logoutSuccess(dispatch)
        } catch (error) {
            logoutFail(dispatch, error);
        }
    };
};

const logoutSuccess = (dispatch) => {
    dispatch({ type: LOGOUT_SUCCESS });

}

const logoutFail = (dispatch, error) => {
    dispatch({ type: LOGOUT_FAIL });
};

const getUserSuccess = (dispatch, username) => {
    dispatch({ type: GET_USER_SUCCESS, payload: username });

}

const getUserFail = (dispatch, error) => {
    dispatch({ type: GET_USER_FAIL });
};



