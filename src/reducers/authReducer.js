import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    NAME_CHANGED,
} from '../actions/types';


const INITIAL_STATE = {
    name: '',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NAME_CHANGED:
            return { ...state, name: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: 1 };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed', loading: false };
        default:
            return state;
    }
};