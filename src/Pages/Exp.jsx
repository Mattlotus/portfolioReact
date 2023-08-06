import React from 'react'
import Squares from '../components/Squares'
import Navbar from '../components/Navbar'

function Exp() {
  return (
    <div>
      <Navbar></Navbar>
        <Squares></Squares>
      
        <div className='codeContainer'>
        <h2 className='html'>Languages I've learned</h2>
            <div className='html'></div>
          
            <img src="https://img-c.udemycdn.com/course/750x422/5178116_6858.jpg" alt="" className='languages'/>
            {/* <img src="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png" alt=""  className='reactPic'/>
             */}
           
        </div>
    </div>
  )
}

export default Exp