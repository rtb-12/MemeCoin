import React from 'react'
import Logo from '../../../assets/Lateral_Logo.svg'
import './About.css'
import  Instagram from '../../../assets/instagram.svg'
import  Twitter from '../../../assets/twitter.svg'
import  Youtube from '../../../assets/youtube.svg'
function About() {
  return (
    <div className='About'>
        <img src={Logo} alt='Logo' className='Lateral'/>
        <div className='About_content'>
            <p>THIS WEBSITE LETS YOU CREATE YOUR OWN MEME COIN AND BUY ON MEME COIN, SECURING YOU FROM RUG PULLS AND HONEY POTS. THIS WEBSITE LETS YOU DO SECURE, AUTONOMOUS TRANSACTION AND SECURE YOU FROM ANY SCAM.</p>
            <h3 className='Follow'>FOLLOW US ON</h3>
            <div className='Icons'>
                <img src={Instagram} alt='Instagram'/>
                <img src={Twitter} alt='Twitter'/>
                <img src={Youtube} alt='Youtube'/>
            </div>
        </div>

    </div>
  )
}

export default About