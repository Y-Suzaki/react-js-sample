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