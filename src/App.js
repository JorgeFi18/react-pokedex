import React, {useEffect} from 'react';
import { getPokemons } from './api'

function App() {
  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    fetchPokemons()
  }, []);

  return (
    <>
      <h1 id="heading">Hello world!</h1>
    </>
  );
}

export default App;
