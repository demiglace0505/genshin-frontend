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
  // console.log(charName, 'reducer')
  return async (dispatch) => {
    const res = await characterService.getCharacter(charName)
    const character = {
      ...res,
      'charCode': charName
    }
    dispatch({
      type: "GET_CHARACTER",
      payload: character
    })
  }
}


export default characterDetailReducer