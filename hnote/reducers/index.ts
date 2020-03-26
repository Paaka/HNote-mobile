const initalState = {
    counter: 1,
    defaultLists: [{ id: 'MyDay' }],
    userLists: [],
    tasks: [],
};

const rootReducer = (state = initalState, action) => {
    switch (action.type) {
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
        case 'ADD_TASK_TO_LIST': {
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        id: `${state.tasks.length}-${Math.floor(
                            Math.random() * 1000
                        )}`,
                        list: action.payload.listID,
                        content: action.payload.content,
                    },
                ],
            };
        }
        case 'UPDATE_TASK': {
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.payload.itemID) {
                        return {
                            ...task,
                            content: action.payload.content,
                        };
                    } else {
                        return task;
                    }
                }),
            };
        }
        default: {
            return state;
        }
    }
    return state;
};

export default rootReducer;
