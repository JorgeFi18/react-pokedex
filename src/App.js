import React, { useEffect } from 'react';
import { getRickMorty } from './api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "./style.css";


function App() {
  const fetchRickMorty = async () => {
    try {
      const data = await getRickMorty();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    fetchRickMorty()
  }, []);

  return (
    <>
      <div className="container-title">
        <img className="title" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" />
      </div>
      <div className="container-title">
        <input className="search" type="text" placeholder="Find a character"/>
        <FontAwesomeIcon className="container-icon" icon={faMagnifyingGlass} style={{ color: '#fff'}} size="2xl" />
      </div>
    </>
  );
}

export default App;
