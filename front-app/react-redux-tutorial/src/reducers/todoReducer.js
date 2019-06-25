const initState = [];

const todoReducer = (state = initState, action) => {
    console.log(state);

    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ];
        case 'DEL':
            console.log(action);
            return state.filter(todo => todo.id !== action.id);
        default:
            return state
    }
};

export default todoReducer;
