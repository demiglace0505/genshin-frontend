import axios from 'axios'

import { URI } from '../config.js'

const getAllCharacters = async () => {
  const res = await axios.get(`${URI}/characters`)
  console.log('getAllCharacters service', res)
  return res.data
}

export default {
  getAllCharacters
}