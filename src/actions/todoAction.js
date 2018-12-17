import { AsyncStorage } from 'react-native';
import {
    TODO_CHANGED,
    ADD_TODO,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAIL,
    GET_TODOS,
    GET_TODOS_SUCCESS,
    GET_TODOS_FAIL
} from './types';


export const todoChanged = (text) => {
    return {
        type: TODO_CHANGED,
        payload: text
    };
};

export const onSaveItem = (todoName, date, color) => {
    const data = [];
    const id = Math.floor(Math.random() * 100);
    return (dispatch) => {
        const DataObject = { id: id,todo: todoName, dueDate: date, color: color }
        data.push(DataObject);
        console.warn(data);
        dispatch({ type: ADD_TODO });
        AsyncStorage.setItem("todo", JSON.stringify(data))
            .then(res => addTodoSuccess(dispatch, res))
            .catch(err => addTodoFail(dispatch, err))
    };
};

export const getTodos = () => {
    return (dispatch) => {
        dispatch({ type: GET_TODOS });
        try {
            AsyncStorage.getItem("todo")
                .then((value) => {
                    getTodoSuccess(dispatch, value);
                })
        } catch (error) {
            getTodoFail(dispatch, error);
        }
    };
};

const addTodoSuccess = (dispatch, res) => {
    dispatch({ type: ADD_TODO_SUCCESS });

}

const addTodoFail = (dispatch, error) => {
    dispatch({ type: ADD_TODO_FAIL });
    alert(error);
};

const getTodoSuccess = (dispatch, value) => {
    dispatch({ type: GET_TODOS_SUCCESS, payload: value });

}

const getTodoFail = (dispatch, error) => {
    dispatch({ type: GET_TODOS_FAIL });
    alert(error);
};

