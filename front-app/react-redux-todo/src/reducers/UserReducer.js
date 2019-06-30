const initState = {
    fetching: false,
    fetched: false,
    users: [{
        "id": "0001",
        "name": "tanaka",
        "password": "xxxx0001"
    }],
    error: null
};

const userReducer = (state=initState, action) => {
    switch (action.type) {
        case 'START_USER':
            return {
                ...state,
                fetching: true
            };
        case 'FETCHED_USER':
            return {
                ...state,
                fetching: false,
                fetched: true,
                users: action.users
            };
        case 'ERROR_USER':
            return {
                ...state,
                fetching:false,
                error: action.error
            };
        default:
            return state;
    }
};

export default userReducer;