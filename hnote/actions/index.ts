export const addList: any = str => {
    return {
        type: 'ADD_LIST',
        payload: {
            text: str,
        },
    };
};
