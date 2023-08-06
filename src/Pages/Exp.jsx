import React from 'react'
import Squares from '../components/Squares'
import Navbar from '../components/Navbar'

function Exp() {
  return (
    <div>
      <Navbar></Navbar>
        <Squares></Squares>
        <div className='codeContainer'>
            <div className='html'>Languages I've Learned</div>
            <img src="https://scrimba.com/articles/content/images/2022/11/How-HTML--CSS--and-JavaScript-work-main.png" alt="" className='languages'/>
            
           
        </div>
    </div>
  )
}

export default Exp