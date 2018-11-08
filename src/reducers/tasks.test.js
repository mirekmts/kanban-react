import * as actions from '../actions';
import tasksReducer, { initialState } from './tasks';
import { newItem } from '../data/fixtures';

describe('Reducers Tasks', () => {
  it('should return initial state', () => {
    expect(tasksReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD NEW TASK', () => {
    const createAction = {
      type: actions.ADD_NEW_TASK,
      payload: {
        id: 'abv',
        name: newItem.name,
        description: newItem.description,
      },
    };

    expect(tasksReducer(undefined, createAction))
      .toEqual([
        ...initialState,
        {
          id: createAction.payload.id,
          name: createAction.payload.name,
          description: createAction.payload.description,
        },
      ]);
  });

  it('should handle DELETE TASK', () => {
    const createAction = {
      type: actions.DELETE_TASK,
      taskId: initialState[0].id,
    };

    expect(tasksReducer(undefined, createAction)).not.toContainEqual(initialState[0]);
  });
});
