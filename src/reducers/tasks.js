import * as actions from '../actions';
import { tasks } from '../data/mockData';

export const initialState = tasks;

const addNewTask = (state, payload) => state.concat(payload);

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_NEW_TASK:
      return addNewTask(state, action.payload);
    case actions.DELETE_TASK:
      return state.filter(task => task.id !== action.taskId);
    default:
      return state;
  }
};

export default tasksReducer;
