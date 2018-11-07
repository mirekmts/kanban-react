export const ADD_NEW_LIST = 'ADD_NEW_LIST';
export const UPDATE_LIST = 'UPDATE_LIST';
export const ATTACH_TO_LIST = 'ATTACH_TO_LIST';

export const addNewList = (listName) => {
    return {
        type: ADD_NEW_LIST,
        listName,
    };
};

export const updateList = (listName, listId) => {
    return {
        type: UPDATE_LIST,
        listName,
        listId,
    };
};

export const attachToList = (listId, taskId) => {
  return {
    type: ATTACH_TO_LIST,
    listId,
    taskId,
  };
}