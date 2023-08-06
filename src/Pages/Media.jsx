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

                  console.log(response)
  }
  useEffect(()=>{
    getData()
  }, [count])
  return (

    
    <div>
        <Navbar></Navbar>
    
        <div className="App">
      <button onClick={()=>setCount(count +1)}>Ye Motivation</button>
      <p>{kanyeQuote?.response}Quote:</p>
      <p>{kanyeQuote?.constructor}</p>
      <Kanye></Kanye>

      {kanyeQuote.map((q, i) => {

let author = q.author.split(",");
        return (
          <div className="Fwrapper" key={i}>
            <div className="qtxt">{q.text}</div>
            <div className="author">{author[0]}</div>
          </div>
        );
      })}

      
    </div>
    </div>
  )
}

export default Media