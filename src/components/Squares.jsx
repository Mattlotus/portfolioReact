import React from 'react'
import { Link } from 'react-router-dom'








function Squares() {
  return (
    <div className='squareBar'>
        <Link to='/Contact' className='contactLink' onClick='' >
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Street_Fighter_6_box_art.jpg/220px-Street_Fighter_6_box_art.jpg" alt="" className='square' />
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


        {/* <Link to='/Multiverse' className='multi'>
        <div>
        <img src="https://www.lionbanner.com/wp-content/uploads/2023/02/PNG-LOW-QULITY-1-FOR-WEB-USE.png" alt="" className='square' />
        </div>
        </Link> */}

          <Link to='/Spacebattle' className='space'>
        <img src="https://cdn1.epicgames.com/b156c3365a5b4cb9a01a5e1108b4e3f4/offer/EGS_STARWARSBattlefrontIICelebrationEdition_DICE_S2-1200x1600-11d040719a8457bbf36cabbe89b200db.jpg" alt="" className='square' />
        </Link>


        <Link to='/Multiverse' className='multi'>
        <div>
        <img src="https://www.lionbanner.com/wp-content/uploads/2023/02/PNG-LOW-QULITY-1-FOR-WEB-USE.png" alt="" className='square' />
        </div>
        </Link>
    </div>
  )
}


export default Squares