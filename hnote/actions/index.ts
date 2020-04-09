import * as types from './types';

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

export const removeTask = (taskId: string) => {
    return {
        type: 'REMOVE_TASK',
        payload: {
            taskID: taskId,
        },
    };
};

export const updateTask = (itemId: string, updatedValue: any) => {
    return {
        type: 'UPDATE_TASK',
        payload: {
            itemID: itemId,
            content: updatedValue,
        },
    };
};

export const updateTaskIsFinished = (itemId: string, active: boolean) => {
    return {
        type: 'UPDATE_TASK_IS_FINISHED',
        payload: {
            itemID: itemId,
            isDone: !active,
        },
    };
};

export const updateIsImportantHandler = (taskId: string, active: boolean) => {
    return {
        type: 'UPDATE_TASK_IS_IMPORTANT',
        payload: {
            itemID: taskId,
            isFinished: !active,
        },
    };
};

export const addSubtask = (taskId: string, value: string) => {
    return {
        type: types.ADD_SUBTASK,
        payload: {
            taskID: taskId,
            subTaskcontent: value,
        },
    };
};

export const updateSubtask = (
    taskID: string,
    subtaskID: string,
    value: string
) => {
    return {
        type: types.UPDATE_SUBTASK,
        payload: {
            taskID,
            subtaskID,
            updatedContent: value,
        },
    };
};
