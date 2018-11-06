import * as actions from '../actions'
import uuidv4 from 'uuid/v4'
import { lists } from '../data/lists'

const initialState = { lists }

const addNewList = (state, listName) => {
  const newList = {
    id: uuidv4(),
    name: listName,
    items: [],
  }

  return {
    ...state,
    lists: [...state.lists, newList]
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_NEW_LIST:
      return addNewList(state, action.listName)
    default:
      return state;
  }
}

export default reducer;