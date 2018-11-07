export const ADD_NEW_LIST = 'ADD_NEW_LIST';
export const UPDATE_LIST = 'UPDATE_LIST';
export const ADD_TASK_TO_LIST = 'ADD_TASK_TO_LIST';
export const REMOVE_TASK_FROM_LIST = 'REMOVE_TASK_FROM_LIST';

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

export const addTaskToList = (listId, taskId) => {
  return {
    type: ADD_TASK_TO_LIST,
    listId,
    taskId,
  };
}

export const removeTaskFromList = (listId, taskId) => {
    return {
      type: REMOVE_TASK_FROM_LIST,
      listId,
      taskId,
    };
  }