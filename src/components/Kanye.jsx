import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'

function Kanye() {
  const [kanyeQuote, setkanyeQuote]=useState('')
  const [count, setCount] =useState(0)

  const getData = async () => {

    const response = await axios.get ('https://api.kanye.rest/')
    

                  console.log(response.data.quote)
                  setkanyeQuote(response.data.quote)
                  console.log(kanyeQuote)
  }
  useEffect(()=>{
    getData()
  }, [count])
  return (
    <div>
      
        <div>
          
          <img src="https://postergrail.com/cdn/shop/products/A_31.jpg?v=1678797664&width=2048" alt="" className='square' onClick={()=> getData()}/>
        </div>
      

        
    </div>
  )
}

export default Kanye