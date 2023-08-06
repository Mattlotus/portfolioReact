import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Practice() {
    let quoteUrl = " ";
  const [quote, setQuote] = useState([]);
  const getData = async () => {
    const response = await axios.get('https://api.kanye.rest/');
    const info = await response.data;
    console.log(info);
    setQuote(info);
  };
  useEffect(() => {
    getData();
  }, []);


  return (
    <div>
        {quote.map((q, i) => {
let author = q.author.split(",");
        return (
          <div className="Fwrapper" key={i}>
            <div className="qtxt">{q.text}</div>
            <div className="author">{author[0]}</div>
          </div>
        );
      })}
    </div>
  )
}

export default Practice