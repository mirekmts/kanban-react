import * as actions from './index';
import { list } from '../data/fixtures';

describe('actions', () => {
  it('creates an actions to add new list', () => {
    const expectedAction = {
      type: actions.ADD_NEW_LIST,
      listName: list.name,
    };

    expect(actions.addNewList(list.name)).toEqual(expectedAction);
  });

  it('creates an actions to add new task', () => {
    const expectedAction = {
      type: actions.ADD_NEW_TASK,
      listId: list.id,
      itemValue: newItem,
    };

    expect(actions.addNewTask(newItem, list.id)).toEqual(expectedAction);
  });
});
