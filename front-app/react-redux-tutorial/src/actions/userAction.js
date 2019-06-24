export const setName = (name) => {
    return {
        type: 'SET_NAME',
        name: name
    }
};

export const setAge = (age) => ({
   type: 'SET_AGE',
   age: age
});