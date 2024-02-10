import React, { useRef } from 'react'
import { useUrl } from '../hooks/useUrl'
import { Parallax, ParallaxLayer} from '@react-spring/parallax'
import MyBoard from './UI/MyBoard/MyBoard'
import cloud from '/src/assets/cloud.svg'

const AboutSkills = () => {
  const parralax = useRef(true)
  
  return (
    <div className='skills'>
      <Parallax ref={parralax} pages={1}>
      <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: useUrl('stars', true),
            backgroundSize: 'cover',
          }}
        />
        <ParallaxLayer offset={0} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '65%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.7} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={cloud} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={cloud} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>
      </Parallax>
      <h1 className='skills__header'>About my Skills</h1>
      <MyBoard></MyBoard>
    </div>
  )
}

export default AboutSkills