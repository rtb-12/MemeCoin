import React from 'react'
import Doge from '../../../assets/Original_Doge_meme.jpg'
import './Create.css'
function Create() {
  return (
    <div className='Create'>
        <h2>KING OF THE HILL</h2>
        <div className='King'>
            <img className='King_photu' src={Doge} alt='King of the Hill'/>
            <div className='King_details'>
                <h3>CREATED BY:   SWASY</h3>
                <h3>MARKET CAP:   29K</h3>
                <h3>REPLIES:   89</h3>
                <h3>NAME:   DOGE</h3>
            </div>
        </div>
        <div className='Token_bttn'>CREATE TOKEN</div>
        <h3 className='safe'>Why are we safe?</h3>
    </div>
  )
}

export default Create