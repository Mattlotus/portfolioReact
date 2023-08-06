import React from 'react'
import axios from 'axios';
import './App.css';
import { useEffect,useState } from 'react';

function Media() {
    const [kanyeQuote, setkanyeQuote]=useState({})
  const [count, setCount] =useState(0)

  const getData = async () => {

    const response = await axios.get ('https://api.kanye.rest/')
                  .then(response => console.log(response.data))
                  // .then (freeGames => setFreeGames())
                  .catch(err => console.log(err))

                  console.log(response)
  }
  return (
    <div>
        <div className="App">
      <button onClick={()=>setCount(count +1)}>Moitivation</button>
      <p>{kanyeQuote?.response}Quote:</p>
      <p>{kanyeQuote?.constructor}</p>

      
    </div>
    </div>
  )
}

export default Media