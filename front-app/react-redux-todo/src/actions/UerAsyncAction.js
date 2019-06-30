export const getUsers = () => {
    return {
        type: 'START_USER'
    }
};

export const getAsyncUsers = () => {
    return (dispatch) => {
        dispatch({type: 'START_USER'});
        fetch('http://localhost:8080/users')
            .then(res => res.json())
            .then(data => {
                dispatch({type: 'FETCHED_USER', users: data})
            })
    };
};