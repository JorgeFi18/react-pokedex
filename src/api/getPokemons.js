import { values } from '../config/constants'

const getPokemons = async (limit = 10, offset = 0) => {
  const { API_URL} = values
  try {
    const url = `${API_URL}pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default getPokemons;