import React from 'react'
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import './Landing.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Create from './Components/Create';
import Buy from './Components/Buy';
import About from './Components/About';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

function Landing() {
  const [init, setInit] = useState(false);
  const smoother = useRef();
  const main = useRef();
  const tl = useRef();
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      
      await loadSlim(engine);
      
    }).then(() => {
      setInit(true);
    });
    tl.current.play();
  }, []);

  useGSAP(
    ()=>{
      tl.current = gsap
      .timeline({ScrollTrigger: {
        trigger: '.hola',
        pin: true,
        start: 'top top',
        end: '+=300',
        markers: true,
      }});
      
      smoother.current = ScrollSmoother.create({
        smooth: 5, // seconds it takes to "catch up" to native scroll position
        effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
      });
      
    },
    { scope: main }
  )

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#104E6E",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        // links: {
        //   color: "#ffffff",
        //   distance: 150,
        //   enable: true,
        //   opacity: 0.5,
        //   width: 1,
        // },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 200,
        },
        opacity: {
          value: 1,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <div  className='Layer1'>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
      <div ref={main} className='Layer2'>
      <Navbar className="Layer3"/>
      <Home className="Layer3"/>
      <h1 id="hello" className='Halo'>CREATE COIN</h1>
      <Create className="Layer3"/>
      <h1 className='Halo'>TRADE COIN</h1>
      <Buy className="Layer3"/>
      <h1 className='Halo'>ABOUT US</h1>
      <About className="Layer3"/>
      </div>
     
      
      </div>
    );
  }


  return (
    <div></div>
  )
}

export default Landing