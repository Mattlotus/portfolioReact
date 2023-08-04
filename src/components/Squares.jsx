import React from 'react'
import { Link } from 'react-router-dom'








function Squares() {
  return (
    <div className='squareBar'>
        <Link to='/Contact' className='contactLink' onClick='' >
            <div>
        <button className='square'>CONTACT </button>
        </div>
        </Link>
        <Link to='/Resume' className='resumeLink'>
        <div>
        <button className='square'>RESUME</button>
        </div>
        </Link>
        <Link to='/Exp' className='exp'>
        <div>
        <button className='square'> EXP</button>
        </div>
        </Link>
    </div>
  )
}


export default Squares