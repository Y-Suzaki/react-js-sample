let count = 0;

export const addTodo = (text) => {
    return {
        type: 'ADD',
        id: ++count,
        text
    }
};

export const delTodo = (id) => {
    return {
        type: 'DEL',
        id
    }
};

// thunkを使った非同期用のAction
export const addTodoAsync = (text) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(addTodo(text));
        }, 3000)
    }
};