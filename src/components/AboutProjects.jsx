import React from 'react'
import MyProject from './UI/MyProject/MyProject'
import { info } from '../assets/projects_info'
import prev_bricks from '/src/assets/bricks.png'
import prev_tictactoe from '/src/assets/tictactoe.png'

const AboutProjects = () => {

  return (
    <div className='projects'>
      {/* Paralax */}
      <h1 className='projects__header'>My Projects</h1>
      <MyProject prev={prev_bricks} title={'Bricks'} info={info.bricks} link={'https://alexbricks.netlify.app/'}></MyProject>
      {/* <MyProject prev={prev_tictactoe} title={'TicTacToe'} info={info.tictactoe} link={'https://tictactoe-by-sucevan.netlify.app/'}></MyProject> */}
    </div>
  )
}

export default AboutProjects