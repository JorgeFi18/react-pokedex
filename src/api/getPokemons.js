const getRickMorty = async () => {
  try {
    const url = `https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default getRickMorty;