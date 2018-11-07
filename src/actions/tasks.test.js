import * as actions from './index';
import { newItem } from '../data/fixtures';

describe('Actions Tasks', () => {
  it('creates an actions to add new task', () => {
    const expectedAction = {
      type: actions.ADD_NEW_TASK,
      payload: {
        name: newItem.name,
        description: newItem.description,
      }
    };

    expect(actions.addNewTask(newItem).type).toEqual(expectedAction.type);
    expect(actions.addNewTask(newItem).payload.name).toEqual(expectedAction.payload.name);
    expect(typeof actions.addNewTask(newItem).payload.id).toBe('string');
    expect(actions.addNewTask(newItem).payload.description).toEqual(expectedAction.payload.description);
  });

  it('creates an actions to add new task to list', () => {
    const taskId = '1bad2'
    const expectedAction = {
      type: actions.DELETE_TASK,
      taskId,
    };

    expect(actions.deleteTask(taskId)).toEqual(expectedAction);
  });

});
