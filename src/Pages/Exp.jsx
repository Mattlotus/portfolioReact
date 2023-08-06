import React from 'react'
import Squares from '../components/Squares'
import Navbar from '../components/Navbar'

function Exp() {
  return (
    <div>
      <Navbar></Navbar>
        <Squares></Squares>
      
        <div className='codeContainer'>
        <p className='html'>Languages I've learned</p>
            <div className='html'></div>
          
            <img src="https://scrimba.com/articles/content/images/2022/11/How-HTML--CSS--and-JavaScript-work-main.png" alt="" className='languages'/>
            {/* <img src="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png" alt=""  className='reactPic'/>
             */}
           
        </div>
    </div>
  )
}

export default Exp