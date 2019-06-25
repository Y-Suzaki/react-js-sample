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
