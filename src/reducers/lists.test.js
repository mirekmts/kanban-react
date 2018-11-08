import * as actions from '../actions';
import listsReducer, { initialState } from './lists';
import { list } from '../data/fixtures';

describe('Reducers Lists', () => {
  it('should return initial state', () => {
    expect(listsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD NEW LIST', () => {
    const createAction = {
      type: actions.ADD_NEW_LIST,
      payload: {
        id: 'abv',
        name: 'Review',
        items: [],
      },
    };

    expect(listsReducer(undefined, createAction))
      .toEqual([
        ...initialState,
        {
          name: createAction.payload.name,
          id: createAction.payload.id,
          items: [],
        },
      ]);
  });

  it('should handle UPDATE LIST', () => {
    const createAction = {
      type: actions.UPDATE_LIST,
      listName: 'Updated backlog',
      listId: list.id,
    };

    expect(listsReducer([list], createAction))
      .toEqual([{
        ...list,
        name: createAction.listName,
      }]);
  });

  it('shouldn\'t handle UPDATE LIST - wrong id', () => {
    const createAction = {
      type: actions.UPDATE_LIST,
      listName: 'Updated backlog',
      listId: `${list.id}1`,
    };

    expect(listsReducer([list], createAction))
      .toEqual([list]);
  });

  it('should handle ADD TASK TO LIST', () => {
    const createAction = {
      type: actions.ADD_TASK_TO_LIST,
      listId: list.id,
      taskId: 'abc',
    };

    expect(listsReducer([list], createAction))
      .toContainEqual({
        ...list,
        items: [...list.items, createAction.taskId],
      });
  });

  it('shouldn\'t  handle ADD TASK TO LIST - wrong id', () => {
    const createAction = {
      type: actions.ADD_TASK_TO_LIST,
      listId: `${list.id}1`,
      taskId: 'abc',
    };

    expect(listsReducer([list], createAction))
      .toContainEqual({
        ...list,
      });
  });

  it('should handle REMOVE TASK FROM LIST', () => {
    const createAction = {
      type: actions.REMOVE_TASK_FROM_LIST,
      listId: list.id,
      taskId: list.items[0],
    };

    expect(listsReducer([list], createAction))
      .toContainEqual({
        ...list,
        items: [],
      });
  });

  it('shouldn\'t handle REMOVE TASK FROM LIST - wrong id', () => {
    const createAction = {
      type: actions.REMOVE_TASK_FROM_LIST,
      listId: `${list.id}1`,
      taskId: list.items[0],
    };

    expect(listsReducer([list], createAction))
      .toContainEqual({
        ...list,
      });
  });
});
