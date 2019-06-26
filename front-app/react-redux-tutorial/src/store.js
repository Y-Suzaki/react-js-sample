// reduxに必要なComponent
import { createStore as reduxCreateStore, applyMiddleware, combineReducers, compose } from "redux";
import counterReducer from './reducers/counterReducer';
import userReducer from './reducers/userReducer';
import todoReducer from './reducers/todoReducer';

// redux-thunkに必要なComponent
import thunk from 'redux-thunk';

export default function createStore() {
    //for Redux DevTools
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return reduxCreateStore(
        combineReducers(
            // ここの第一引数に設定した「todos」は、stateの属性名になる
            {todos: todoReducer}
        ),
        composeEnhancers(applyMiddleware(
            thunk
        ))
    )
}