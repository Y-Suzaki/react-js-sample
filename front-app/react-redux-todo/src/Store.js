// reduxに必要なComponent
import { createStore as reduxCreateStore, applyMiddleware, combineReducers, compose } from "redux";
import todoReducer from './reducers/TodoReducer';

// redux-thunkに必要なComponent
import thunk from 'redux-thunk';

// connected-react-routerの使用に必要なimport
import { connectRouter, routerMiddleware } from 'connected-react-router'

export default function createStore(history) {
    //for Redux DevTools
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return reduxCreateStore(
        combineReducers(
            {
                // Router用の状態もStoreで管理
                router: connectRouter(history),
                // ここの第一引数に設定した「todos」は、stateの属性名になる
                todos: todoReducer
            }
        ),
        composeEnhancers(
            applyMiddleware(
                thunk,
                routerMiddleware(history)
        ))
    )
}