import React from 'react'
import './Home.css'
import Arrow from '../../../assets/Arrow 1.svg'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

function Home() {
    const tl = useRef();
    useEffect(() => {
        tl.current.play();
    }, []);
    useGSAP(
        () => {
            tl.current = gsap
                .timeline({ repeat: -1 })
                .to('.Arrow',{y: -10 , ease: 'bounce', duration: 1})
                .reverse()
        })
  return (
    <div className='Home'>
        <h1><span className='light'>WELCOME</span>  TO <span className='MemeMoney'>MEMEMONEY,</span> </h1>
        <h1> <span className='light'>CREATE</span> YOUR MEME-COIN OR</h1>
        <h1><span className='light'> TRADE</span> ON MEME-COIN SAFELY...</h1>
       <img src={Arrow} alt='Arrow' className='Arrow'/>
    </div>
  )
}

export default Home