import React from 'react'
import { Link } from 'react-router-dom'








function Squares() {
  return (
    <div className='squareBar'>
        <Link to='/Contact' className='contactLink' onClick='' >
            <div>
              <img src="https://image.api.playstation.com/vulcan/ap/rnd/202211/1408/l3bg7nmfPpPzam5jOVlaUFww.jpg" alt="" className='square' />
        </div>
        </Link>
        <Link to='/Resume' className='resumeLink'>
        <div>
          <img src="https://media.gamestop.com/i/gamestop/11206859-f4095b2b" alt="" className='square'/>
        </div>
        </Link>
        <Link to='/Exp' className='exp'>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/en/5/5b/Mortal_Kombat_1_key_art.jpeg" alt="" className='square'/>
      
        </div>
        </Link>
    </div>
  )
}


export default Squares