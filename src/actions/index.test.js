import * as actions from './actions'
import { list } from '../data/fixtures'

describe('actions', () => {
  it('creates an actions to add new list', () => {
    const expectedAction = {
      type: actions.ADD_NEW_LIST,
      listName: list.name
    };

    expect(actions.addNewList(list.name)).toEqual(expectedAction)
  })
})
