import React from 'react'
import MemeCoin from './MemeCoin'
import './Buy.css'
import See from '../../../assets/Seemore.svg'

function Buy() {
  return (
    <div>
    <div className='Coin_grid'>
        <MemeCoin/>
        <MemeCoin/>
        <MemeCoin/>
        <MemeCoin/>
    </div>
    <img src={See} alt='See more' className='See_more'/>
    </div>
  )
}

export default Buy