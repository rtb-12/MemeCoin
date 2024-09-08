import React from 'react'
import Logo from '../../../assets/Logo.svg'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'



function Navbar() {
  const navigate = useNavigate();

function Auth() {
    navigate('/auth');
}

  return (
    <div className='Nav'>
        
            <img src={Logo} alt='Logo' className='Logo'/>
        
        <div className='Nav_bttns'>
            <div className='Register Nav_Box' onClick={Auth}>REGISTER</div>
            <div className='Login Nav_Box'>LOGIN</div>
        </div>
    </div>
  )
}

export default Navbar