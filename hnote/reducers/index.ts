const initalState = {
    counter: 1,
    defaultLists: [{ id: 'MyDay' }],
    userLists: [],
};

const rootReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'ADD_NOTE': {
            console.log('ADD_NOTE');
            return state;
        }
        case 'ADD_LIST': {
            return {
                ...state,
                userLists: [
                    ...state.userLists,
                    {
                        id: `${state.userLists.length}-${Math.floor(
                            Math.random() * 1000
                        )}`,
                        text: action.payload.text,
                    },
                ],
            };
        }
        default: {
            return state;
        }
    }
    return state;
};

export default rootReducer;
