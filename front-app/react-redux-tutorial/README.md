# Setup
## Install Redux DevTools
* Chrome Extension
    * Redux DevTols
* Add codes below in react-redux
```
const store = createStore(
    todoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
```

## Install redux-thunk
Redux-Thunk is able to connect async.
* Run command below
```
npm install --save redux-thunk
```