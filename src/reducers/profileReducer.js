import {
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_FAIL,
    LOGOUT,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL
} from '../actions/types';


const INITIAL_STATE = {
    user: '',
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USER:
            return { ...state, loading: true };
        case GET_USER_SUCCESS:
            return { ...state, user: action.payload };
        case GET_USER_FAIL:
            return { ...state, loading: false, error: 'Error getting user' };
        case LOGOUT:
            return { ...state, loading: true };
        case LOGOUT_SUCCESS:
            return { ...state, loading:false};
        case LOGOUT_FAIL:
            return { ...state, loading: false, error: 'Error' };
        default:
            return state;
    }
};