const initState = [];

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                action.text
            ];
        case 'DELETE_TODO':
            const todos = [...state];
            todos.splice(action.index, 1);
            return todos;
        default:
            return state;
    }
};

export default todoReducer;