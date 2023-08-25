import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { authReducer } from '../redux/authReducer/reducer'
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
    authReducer
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;