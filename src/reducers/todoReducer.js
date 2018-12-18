import {
    TODO_CHANGED,
    ADD_TODO,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAIL,
    GET_TODOS,
    GET_TODOS_SUCCESS,
    GET_TODOS_FAIL,
    DELETE_TODO,
    DELETE_TODO_FAIL,
    DELETE_TODO_SUCCESS,
    COMPLETE_TODO,
    COMPLETE_TODO_SUCCESS,
    COMPLETE_TODO_FAIL
} from '../actions/types';


const INITIAL_STATE = {
    todoName: '',
    date: '',
    data: [],
    loading: false,
    error: ''

};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TODO_CHANGED:
            return { ...state, todoName: action.payload };
        case ADD_TODO:
            return { ...state, loading: true };
        case ADD_TODO_SUCCESS:
            return { ...state, loading: false };
        case ADD_TODO_FAIL:
            return { ...state, ...INITIAL_STATE, error: 'Error' };
        case GET_TODOS:
            return { ...state, loading: true };
        case GET_TODOS_SUCCESS:
            return { ...state, ...INITIAL_STATE, loading: false, data: action.payload };
        case GET_TODOS_FAIL:
            return { ...state, ...INITIAL_STATE, error: 'Error' };
        case DELETE_TODO:
            return { ...state, loading: true };
        case DELETE_TODO_SUCCESS:
            return { ...state, loading: false };
        case DELETE_TODO_FAIL:
            return { ...state, ...INITIAL_STATE, error: 'Error' };
            case COMPLETE_TODO:
            return { ...state, loading: true };
        case COMPLETE_TODO_SUCCESS:
            return { ...state, loading: false };
        case COMPLETE_TODO_FAIL:
            return { ...state, ...INITIAL_STATE, error: 'Error' };
        default:
            return state;
    }
};