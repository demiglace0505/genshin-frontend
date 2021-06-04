import characterService from '../services/characters.js'

const characterDetailReducer = (state='', action) => {
  switch (action.type) {
    case "GET_CHARACTER":
      return action.payload
    default:
      return state
  }
}

export const getCharacter = (charName) => {
  console.log(charName, 'reducer')
  return async (dispatch) => {
    const character = await characterService.getCharacter(charName)
    dispatch({
      type: "GET_CHARACTER",
      payload: character
    })
  }
}


export default characterDetailReducer