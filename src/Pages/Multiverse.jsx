import React from 'react'
import Navbar from '../components/Navbar'
import Squares from '../components/Squares'

function Multiverse() {
  return (
    <div>
        <Navbar></Navbar>
        <Squares></Squares>
        <div className='multiBar'>
            <img src="https://www.lionbanner.com/wp-content/uploads/2023/02/PNG-LOW-QULITY-FOR-WEB-USE-1.png" alt="" className="mvb" />
            <div>
            <h1 className='copy'> Copy link to VS Code to play!</h1>
            <p className='hub'>https://github.com/Mattlotus/Misk</p>
            </div>
        </div>

    </div>
  )
}

export default Multiverse