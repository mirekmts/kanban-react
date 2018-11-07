import * as actions from '../actions';
import { tasks } from '../data/mockData';

const initialState = tasks;

const addNewTask = (state, payload) => state.concat(payload);

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_NEW_TASK:
      return addNewTask(state, action.payload)
    default:
      return state;
  }
};

export default tasksReducer;