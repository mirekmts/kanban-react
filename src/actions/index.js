export const ADD_NEW_LIST = 'ADD_NEW_LIST';
export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const UPDATE_LIST = 'UPDATE_LIST';

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

export const updateList = (listName, listId) => {
    return {
        type: UPDATE_LIST,
        listName,
        listId,
    }
};