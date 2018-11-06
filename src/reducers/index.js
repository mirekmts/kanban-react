import * as actions from '../actions'
import uuidv4 from 'uuid/v4'
import { lists } from '../data/lists'

const initialState = { lists }

const addNewList = (state, listName) => {
  const newList = {
    id: uuidv4(),
    name: listName,
    items: [],
  };

  return {
    ...state,
    lists: [...state.lists, newList]
  }
};

const addNewTask = (state, itemValue, listId) => {
	const lists = [...state.lists];

	const listItem = {
		id: uuidv4(),
		name: itemValue.name,
		description: itemValue.description,
	};

	const boardsWithListItem = lists.map(list => {
		if(list.id === listId) {
      list.items.push(listItem);
    }
    
		return list;
  });

	return {
		...state,
		lists: boardsWithListItem,
	}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_NEW_LIST:
      return addNewList(state, action.listName)
    case actions.ADD_NEW_TASK:
      return addNewTask(state, action.itemValue, action.listId)
    default:
      return state;
  }
}

export default reducer;