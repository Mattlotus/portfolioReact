import React from 'react'
import Navbar from '../components/Navbar'
import Squares from '../components/Squares'

function Resume() {
  return (
    <div>
        <div>
            <Navbar></Navbar>
            <Squares></Squares>
            <img src="https://www.resumego.net/wp-content/uploads/references-available-upon-request-1.png" alt="" className='languages'/>
            <div></div>
        </div>
    </div>
  )
}

export default Resume