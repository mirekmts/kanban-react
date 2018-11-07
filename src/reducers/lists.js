import uuidv4 from 'uuid/v4';
import * as actions from '../actions';
import { lists } from '../data/mockData';

const initialState = lists;

const addNewList = (state, listName) => {
  const newList = {
    id: uuidv4(),
    name: listName,
    items: [],
  };

  return state.concat(newList);
};

const updateList = (state, listName, listId) => state.map((list) => {
  if (list.id === listId) {
    list.name = listName;
  }

  return list;
});

const addTaskToList = (state, listId, taskId) => state.map((list) => {
  if (list.id === listId) {
    return {
      ...list,
      items: list.items.concat(taskId),
    };
  }

  return list;
});

const removeTaskFromList = (state, listId, taskId) => state.map((list) => {
  if (list.id === listId) {
    return {
      ...list,
      items: list.items.filter(id => id !== taskId),
    };
  }

  return list;
});

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_NEW_LIST:
      return addNewList(state, action.listName);
    case actions.UPDATE_LIST:
      return updateList(state, action.listName, action.listId);
    case actions.ADD_TASK_TO_LIST:
      return addTaskToList(state, action.listId, action.taskId);
    case actions.REMOVE_TASK_FROM_LIST:
      return removeTaskFromList(state, action.listId, action.taskId);
    default:
      return state;
  }
};

export default listsReducer;
