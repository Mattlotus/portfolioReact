import React from 'react'
import axios from 'axios';
import Navbar from '../components/Navbar';
import Squares from '../components/Squares';

import { useEffect,useState } from 'react';
import Kanye from '../components/Kanye';

function Media() {
    const [kanyeQuote, setkanyeQuote]=useState({})
  const [count, setCount] =useState(0)

  const getData = async () => {

    const response = await axios.get ('https://api.kanye.rest/')
                  .then(response => console.log(response.data))
                  .catch(err => console.log(err))

                  console.log(response.quote)
                  setkanyeQuote(response?.quote)
  }
  useEffect(()=>{
    getData()
  }, [count])
  return (

    
    <div>
        <Navbar></Navbar>
    
        <div className="App">
      <button onClick={()=> getData()}>Ye Motivation</button>
      <p>{kanyeQuote?.response}Quote:</p>
      <p>{kanyeQuote?.constructor}</p>
      <p>{kanyeQuote}</p>
    
      <Kanye></Kanye>

      
    </div>
    </div>
  )
}



export default Media