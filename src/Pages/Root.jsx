import React from 'react'
import {Link} from 'react-router-dom'

const Root = () => {
    const hide = (doThis) => {
    doThis.classList.add('hide')

}
 return(
    <div className='root'>
        <Link  to='/Main'className='mainLink' onClick={(e) => hide(e.target)}>
            <div className='titleContainer'>
            <h1 className='title'>Click profile to begin</h1>
            </div>
            <div className='circles'>
                <img src="" className='addUser' alt="" />
                <img src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/61040698_2636372986376290_8672619519971164160_n.jpg?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4SfqgYqRvZIAX846-sb&_nc_ht=scontent-atl3-1.xx&oh=00_AfAM9n0ut4bTUbwXSQ6uA0fLZ4H_4hdlw_HbmAyHAzoDrQ&oe=64F3A886" className='Matthew'alt="" />
                <div className='nameContainer'>
                <p className='name'>Matthew Sanders </p> 
                <img src="https://www.pngitem.com/pimgs/m/219-2192790_ps-plus-logo-png-plus-playstation-transparent-png.png" alt="" className='psPLus' />
                </div>

            </div>

        </Link>
    </div>
 )
 }
 export default Root