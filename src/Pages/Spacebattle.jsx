import React from 'react'
import Navbar from '../components/Navbar'
import Squares from '../components/Squares'

function Spacebattle() {
  return (
    <div>
        <Navbar></Navbar>
        <Squares></Squares>
        <div className='spaceContainer'>
            <img src="https://cdn1.epicgames.com/b156c3365a5b4cb9a01a5e1108b4e3f4/offer/EGS_STARWARSBattlefrontIICelebrationEdition_DICE_S2-1200x1600-11d040719a8457bbf36cabbe89b200db.jpg" alt="" className='misk' />
            <h1 className='code'>Copy code to vs code to play!</h1>
            <p className='hub'>https://github.com/Mattlotus/spaceBattle</p>
        </div>
    </div>
  )
}

export default Spacebattle