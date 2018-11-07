export const ADD_NEW_LIST = 'ADD_NEW_LIST';
export const UPDATE_LIST = 'UPDATE_LIST';
export const ADD_TASK_TO_LIST = 'ADD_TASK_TO_LIST';
export const REMOVE_TASK_FROM_LIST = 'REMOVE_TASK_FROM_LIST';

export const addNewList = listName => ({
  type: ADD_NEW_LIST,
  listName,
});

export const updateList = (listName, listId) => ({
  type: UPDATE_LIST,
  listName,
  listId,
});

export const addTaskToList = (listId, taskId) => ({
  type: ADD_TASK_TO_LIST,
  listId,
  taskId,
});

export const removeTaskFromList = (listId, taskId) => ({
  type: REMOVE_TASK_FROM_LIST,
  listId,
  taskId,
});
