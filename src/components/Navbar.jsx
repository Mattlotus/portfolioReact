import React from 'react'
import { Link } from 'react-router-dom'
import Media from '../Pages/Media'




function Navbar() {
  return (
    <div className='Ultimate'>
        <div className='sub'>
            
              <div className='sub2'>
                <Link to='/Main'>
                <p className='games'>Games</p>
                </Link>

                <Link to='/Media'>
                  
                <p className='games'>Media</p>
                
                </Link>

                </div>

                <div className='sub3'>
                
                <img src="data:image/png;base64,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" alt="" className='search' />
                <img src="https://png.pngtree.com/png-vector/20190425/ourmid/pngtree-vector-cog-wheel-icon-png-image_987529.jpg" alt="" className='gear' />
                <div>
                  <Link to='/' element>
                  <div>
                <img src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/61040698_2636372986376290_8672619519971164160_n.jpg?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4SfqgYqRvZIAX846-sb&_nc_ht=scontent-atl3-1.xx&oh=00_AfAM9n0ut4bTUbwXSQ6uA0fLZ4H_4hdlw_HbmAyHAzoDrQ&oe=64F3A886" alt=""  className='matt'/>
                {/* <p className='time'>2:24 PM</p> */}
                </div>
                </Link>
                </div>
                </div>
            

        </div>


    </div>
  )
}

export default Navbar






