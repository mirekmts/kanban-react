import * as actions from './index';
import { list, newListName, item } from '../data/fixtures';

describe('actions', () => {
  it('creates an actions to add new list', () => {
    const expectedAction = {
      type: actions.ADD_NEW_LIST,
      listName: list.name,
    };

    expect(actions.addNewList(list.name)).toEqual(expectedAction);
  });

  it('creates an actions to attach new task to list', () => {
    const expectedAction = {
      type: actions.ATTACH_TO_LIST,
      listId: list.id,
      taskId: item.id,
    };

    expect(actions.attachToList(list.id, item.id)).toEqual(expectedAction);
  });

  it('creates an actions to update list name', () => {
    const expectedAction = {
      type: actions.UPDATE_LIST,
      listId: list.id,
      listName: newListName,
    };

    expect(actions.updateList(newListName, list.id)).toEqual(expectedAction)
  });
});
