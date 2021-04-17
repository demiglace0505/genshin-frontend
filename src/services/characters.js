import axios from 'axios'

const baseUrl='https://api.genshin.dev/characters'

const getAllCharacters = async () => {
  const res = await axios.get(`${baseUrl}`)
  console.log('getAllCharacters', res)
  return res.data
}

export default {
  getAllCharacters
}