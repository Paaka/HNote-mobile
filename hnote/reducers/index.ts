const initalState = {
    counter: 1,
    defaultLists: [{ id: 'MyDay' }],
};

const rootReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'ADD_NOTE': {
            console.log('ADD_NOTE');
            return state;
        }
        default: {
            return state;
        }
    }
    return state;
};

export default rootReducer;
