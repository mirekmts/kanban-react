import * as actions from './index';
import { list, newListName, item } from '../data/fixtures';

describe('Actions List', () => {
  it('creates an actions to add new list', () => {
    const expectedAction = {
      type: actions.ADD_NEW_LIST,
      payload: {
        name: list.name,
      },
    };


    expect(actions.addNewList(list.name).type).toEqual(expectedAction.type);
    expect(actions.addNewList(list.name).payload.name).toEqual(expectedAction.payload.name);
    expect(actions.addNewList(list.name).payload.items).toEqual([]);
    expect(typeof actions.addNewList(list.name).payload.id).toBe('string');
  });

  it('creates an actions to add new task to list', () => {
    const expectedAction = {
      type: actions.ADD_TASK_TO_LIST,
      listId: list.id,
      taskId: item.id,
    };

    expect(actions.addTaskToList(list.id, item.id)).toEqual(expectedAction);
  });

  it('creates an actions to remove task from list', () => {
    const expectedAction = {
      type: actions.REMOVE_TASK_FROM_LIST,
      listId: list.id,
      taskId: item.id,
    };

    expect(actions.removeTaskFromList(list.id, item.id)).toEqual(expectedAction);
  });

  it('creates an actions to update list name', () => {
    const expectedAction = {
      type: actions.UPDATE_LIST,
      listId: list.id,
      listName: newListName,
    };

    expect(actions.updateList(newListName, list.id)).toEqual(expectedAction);
  });
});
