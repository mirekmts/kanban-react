import uuidv4 from 'uuid/v4';

export const ADD_NEW_TASK = 'ADD_NEW_TASK';


export const addNewTask = (itemValue) => {
  return {
      type: ADD_NEW_TASK,
      payload: {
        id: uuidv4(),
        name: itemValue.name,
        description: itemValue.description,
      }
  };
};