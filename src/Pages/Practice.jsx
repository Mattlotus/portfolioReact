import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Practice() {
    const [kanyeSays, setKanyeSays] = useState("")
    
    useEffect(()=>{

    }, []);
    axios.get('https://api.kanye.rest/').then((res) => {

    });

    return(
        <div>
            <button>Ye Says</button>
            <p>{kanyeSays}</p>
        </div>
    )
    
  
}

export default Practice