import React from 'react'
import './MemeCoin.css'
import Doge from '../../../assets/Original_Doge_meme.jpg'

function MemeCoin() {
  return (
    <div className='MemeCoin'>
         <div className='Coin'>
            <img className='Coin_photu' src={Doge} alt='King of the Hill'/>
            <div className='Coin_details'>
                <h3>CREATED BY:   SWASY</h3>
                <h3>MARKET CAP:   29K</h3>
                <h3>REPLIES:   89</h3>
                <h3>NAME:   DOGE</h3>
            </div>
        </div>
    </div>
  )
}

export default MemeCoin