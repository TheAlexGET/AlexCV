import React from 'react'
import MyProject from './UI/MyProject/MyProject'
import { info } from '../assets/projects_info'

const AboutProjects = () => {
  const prev_bricks = 'src/assets/bricks.png'
  const prev_tictactoe = 'src/assets/tictactoe.png'
  return (
    <div className='projects'>
      {/* Paralax */}
      <h1 className='projects__header'>My Projects</h1>
      <MyProject prev={prev_bricks} title={'Bricks'} info={info.bricks} link={'https://alexbricks.netlify.app/'}></MyProject>
      <MyProject prev={prev_tictactoe} title={'TicTacToe'} info={info.tictactoe} link={'https://tictactoe-by-sucevan.netlify.app/'}></MyProject>
    </div>
  )
}

export default AboutProjects