import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import ProfileReducer from './profileReducer';
import TodoReducer from './todoReducer';


export default combineReducers({
    auth: AuthReducer,
    profile : ProfileReducer,
    todo: TodoReducer
});