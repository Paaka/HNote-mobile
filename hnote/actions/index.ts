import * as types from './types';

export const addList: any = (str: string) => {
    return {
        type: types.ADD_LIST,
        payload: {
            text: str,
        },
    };
};

export const addTaskToList = (listId: string, str: string) => {
    return {
        type: types.ADD_TASK_TO_LIST,
        payload: {
            listID: listId,
            content: str,
        },
    };
};

export const removeTask = (taskId: string) => {
    return {
        type: types.REMOVE_TASK_FROM_LIST,
        payload: {
            taskID: taskId,
        },
    };
};

export const updateTask = (itemId: string, updatedValue: any) => {
    return {
        type: types.UPDATE_TASK,
        payload: {
            itemID: itemId,
            content: updatedValue,
        },
    };
};

export const updateTaskIsFinished = (itemId: string, active: boolean) => {
    return {
        type: types.UPDATE_IS_FINISHED_IN_TASK,
        payload: {
            itemID: itemId,
            isDone: !active,
        },
    };
};

export const updateIsImportantHandler = (taskId: string, active: boolean) => {
    return {
        type: types.UPDATE_IS_IMPORTANT_IN_TASK,
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

export const deleteSubtask = (taskID: string, subtaskID: string) => {
    return {
        type: types.DELETE_SUBTASK,
        payload: {
            taskID,
            subtaskID,
        },
    };
};

export const updateMyDay = (taskID: string, isOnMyDate: boolean) => {
    return {
        type: types.UPDATE_MY_DAY_SCREEN,
        payload: {
            taskID,
            isOnMyDate: !isOnMyDate,
        },
    };
};

export const updateIsSubtaskIsDone = (
    taskID: string,
    subtaskID: string,
    isSubtaskDone: boolean
) => {
    return {
        type: types.UPDATE_IS_DONE_SUBTASK,
        payload: {
            taskID,
            subtaskID,
            isSubtaskDone,
        },
    };
};
