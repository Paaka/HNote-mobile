export const addList: any = (str: string) => {
    return {
        type: 'ADD_LIST',
        payload: {
            text: str,
        },
    };
};

export const addTaskToList = (listId: string, str: string) => {
    return {
        type: 'ADD_TASK_TO_LIST',
        payload: {
            listID: listId,
            content: str,
        },
    };
};

export const updateTask = (itemId: string, updatedValue: string) => {
    return {
        type: 'UPDATE_TASK',
        payload: {
            itemID: itemId,
            content: updatedValue,
        },
    };
};
