import * as Types from '../actions/types';
import SubtaskItem from '../components/molecules/FormItems/SubtaskItem';

const initalState = {
    userLists: [],
    tasks: [],
};

const rootReducer = (state = initalState, action) => {
    switch (action.type) {
        case Types.ADD_LIST: {
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
        case Types.DELETE_LIST: {
            console.log('action.payload');
            return {
                ...state,
                userLists: state.userLists.filter(
                    (list) => list.id !== action.payload.listID
                ),
            };
        }
        case Types.ADD_TASK_TO_LIST: {
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
                        isDone: false,
                        isImportant: false,
                        isOnMyDayView: false,
                        creationDate: new Date(),
                        subTasks: [],
                    },
                ],
            };
        }
        case Types.UPDATE_TASK: {
            return {
                ...state,
                tasks: state.tasks.map((task) => {
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
        case Types.REMOVE_TASK_FROM_LIST: {
            return {
                ...state,
                tasks: state.tasks.filter(
                    (task) => task.id !== action.payload.taskID
                ),
            };
        }
        case Types.UPDATE_IS_FINISHED_IN_TASK: {
            return {
                ...state,
                tasks: state.tasks.map((item) => {
                    if (item.id === action.payload.itemID) {
                        return {
                            ...item,
                            isDone: action.payload.isDone,
                        };
                    } else {
                        return item;
                    }
                }),
            };
        }
        case Types.UPDATE_IS_IMPORTANT_IN_TASK: {
            return {
                ...state,
                tasks: state.tasks.map((item) => {
                    if (item.id === action.payload.itemID) {
                        return {
                            ...item,
                            isImportant: action.payload.isFinished,
                        };
                    } else {
                        return item;
                    }
                }),
            };
        }
        case Types.UPDATE_MY_DAY_SCREEN: {
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (task.id === action.payload.taskID) {
                        return {
                            ...task,
                            isOnMyDayView: action.payload.isOnMyDate,
                        };
                    } else {
                        return task;
                    }
                }),
            };
        }
        case Types.ADD_SUBTASK: {
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (task.id === action.payload.taskID) {
                        return {
                            ...task,
                            subTasks: [
                                ...task.subTasks,
                                {
                                    id: `${task.subTasks.length}-${Math.floor(
                                        Math.random() * 1000
                                    )}`,
                                    content: action.payload.subTaskcontent,
                                    isDone: false,
                                },
                            ],
                        };
                    } else {
                        return task;
                    }
                }),
            };
        }
        case Types.UPDATE_SUBTASK: {
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (task.id === action.payload.taskID) {
                        return {
                            ...task,
                            subTasks: task.subTasks.map((subtask) => {
                                if (subtask.id === action.payload.subtaskID) {
                                    return {
                                        ...subtask,
                                        content: action.payload.updatedContent,
                                    };
                                } else {
                                    return {
                                        ...subtask,
                                    };
                                }
                            }),
                        };
                    } else {
                        return task;
                    }
                }),
            };
        }
        case Types.DELETE_SUBTASK: {
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (task.id === action.payload.taskID) {
                        return {
                            ...task,
                            subTasks: task.subTasks.filter(
                                (subtask) =>
                                    subtask.id !== action.payload.subtaskID
                            ),
                        };
                    } else {
                        return task;
                    }
                }),
            };
        }
        case Types.UPDATE_IS_DONE_SUBTASK: {
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (task.id === action.payload.taskID) {
                        return {
                            ...task,
                            subTasks: task.subTasks.map((subtask) => {
                                if (subtask.id === action.payload.subtaskID) {
                                    return {
                                        ...subtask,
                                        isDone: action.payload.isSubtaskDone,
                                    };
                                } else {
                                    return {
                                        ...subtask,
                                    };
                                }
                            }),
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
