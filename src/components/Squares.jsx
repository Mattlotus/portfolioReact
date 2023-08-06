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


        <Link to='/Multiverse' className='multi'>
        <div>
        <img src="https://www.lionbanner.com/wp-content/uploads/2023/02/PNG-LOW-QULITY-1-FOR-WEB-USE.png" alt="" className='square' />
        </div>
        </Link>

        <img src="https://cdn.akamai.steamstatic.com/steam/apps/661970/header.jpg?t=1625216525" alt="" className='square' />
    </div>
  )
}


export default Squares