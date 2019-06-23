const initState = 0;

// function counterReducer(state = initState, action) {}
const counterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state -1;
        default:
            return state;
    }
};

export default counterReducer;
