import { useState } from 'react'

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [numPokemons, setNumPokemons] = useState(10);
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${numPokemons}`;

  const handleShowPokemons = async () => {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    setPokemons(data.results);
  }

  return (
    <>
      <h1>Pokemon List</h1>
      <label htmlFor="">
        <input placeholder='Number of Pokemon' type="text" value={numPokemons} onChange={(e) => setNumPokemons(e.target.value)}/>
      </label>
      <button onClick={handleShowPokemons}>Show Pokemons</button>
      <ul>
        {pokemons.map((poke, index) => (
          <li key={index}>
            <h3>{poke.name}</h3>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
