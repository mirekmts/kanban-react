export const ADD_NEW_LIST = 'ADD_NEW_LIST';
export const ADD_NEW_TASK = 'ADD_NEW_TASK';

export const addNewList = (listName) => {
    return {
        type: ADD_NEW_LIST,
        listName,
    }
};

export const addNewTask = (itemValue, listId) => {
    return {
        type: ADD_NEW_TASK,
        itemValue,
        listId,
    }
};