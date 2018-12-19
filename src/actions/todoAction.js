import { AsyncStorage } from 'react-native';
import {
    TODO_CHANGED,
    ADD_TODO,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAIL,
    GET_TODOS,
    GET_TODOS_SUCCESS,
    GET_TODOS_FAIL,
    DELETE_TODO,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_FAIL,
    COMPLETE_TODO,
    COMPLETE_TODO_SUCCESS,
    COMPLETE_TODO_FAIL
} from './types';


export const todoChanged = (text) => {
    return {
        type: TODO_CHANGED,
        payload: text
    };
};

export const onSaveItem = (todoName, date, color) => {
    const id = Math.floor(Math.random() * 100);
    return (dispatch) => {
        const DataObject = { key: id.toString(), name: todoName, date: date.toString(), color: color, completed: 0 }
        dispatch({ type: ADD_TODO });
        AsyncStorage.getItem('todos')
            .then((value) => {
                const newData = JSON.parse(value)
                newData.push(DataObject)
                AsyncStorage.setItem("todos", JSON.stringify(newData))
                    .then(res => addTodoSuccess(dispatch, res))
                    .catch(err => addTodoFail(dispatch, err))
            })

    };
};

export const getTodos = () => {
    return (dispatch) => {
        dispatch({ type: GET_TODOS });
        try {
            AsyncStorage.getItem("todos")
                .then((todo) => JSON.parse(todo))
                .then((result) => {
                    if (result == null) {
                        let todoObject = [{ key: "1", name: 'Build a React Native app', date: new Date(), color: '#4A90E2', completed: 0 }]
                        AsyncStorage.setItem("todos", JSON.stringify(todoObject))
                    }
                    AsyncStorage.getItem("todos")
                        .then((value) => {
                            getTodoSuccess(dispatch, JSON.parse(value));
                        })
                })

        } catch (error) {
            getTodoFail(dispatch, error);
        }
    };
};

export const deleteTodo = (key) => {
    return (dispatch) => {
        dispatch({ type: DELETE_TODO });
        try {
            AsyncStorage.getItem("todos")
                .then((todo) => JSON.parse(todo))
                .then((result) => {
                    const newData = result.filter(item => {
                        return item.key !== key
                    })
                    AsyncStorage.setItem("todos", JSON.stringify(newData))
                    dispatch({ type: DELETE_TODO_SUCCESS })
                })

        } catch (error) {
            dispatch({ type: DELETE_TODO_FAIL })
        }
    };
};

export const completeTodo = (key) => {
    return (dispatch) => {
        dispatch({ type: COMPLETE_TODO });
        try {
            AsyncStorage.getItem("todos")
                .then((todo) => JSON.parse(todo))
                .then((result) => {
                    const newData = result.filter(item => {
                        if(item.key === key){
                            item.completed = 1
                        }
                        return item;
                    })
                    AsyncStorage.setItem("todos", JSON.stringify(newData))
                    dispatch({ type: COMPLETE_TODO_SUCCESS })
                })

        } catch (error) {
            dispatch({ type: COMPLETE_TODO_FAIL })
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

