export const ADD_NEW_LIST = 'ADD_NEW_LIST'

export const addNewList = (listName) => {
    return {
        type: ADD_NEW_LIST,
        listName,
    }
}