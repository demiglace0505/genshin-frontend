const characterSearchReducer = ( state='', action ) => {
  switch (action.type) {
    case 'SET_SEARCH':
      return action.payload
    default:
      return state
  }
}

export const searchChange = (searchText) => {
  return {
    type: 'SET_SEARCH',
    payload: searchText
  }
}

export default characterSearchReducer