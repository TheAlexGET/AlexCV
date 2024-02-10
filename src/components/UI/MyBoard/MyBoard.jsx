import React from 'react'
import cl from './MyBoard.module.css'
import {useSelector} from 'react-redux'

const MyBoard = () => {
  const theme = useSelector((store) => (store.theme))
  return (
    <div className={theme == 'dark'? cl.board__dark : cl.board__light}>
      <div className={cl.board__content}>
        <div className={cl.board__column}>
          <h3>Proficient</h3>
          <div>Html</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>TypeScript</div>
          <div>React JS</div>
          <div>Redux</div>
          <div>Thunk</div>
          <div>RTK Querry</div>
          <div>Scss</div>
          <div>Vite</div>
          <div>Algorithms</div>
          <div>English B2</div>
          <div>GIT</div>
          <div>OOP</div>
          <div>Bootstrap</div>
        </div>
        <div className={cl.board__column}>
          <h3>Middle</h3>
          <div>WebPack</div>
          <div>MobX</div>
          <div>React Spring</div>
          <div>Figma</div>
          <div>JQuery</div>
          <div>Python</div>
          <div>Django</div>
          <div>Mocha JS</div>
        </div>
        <div className={cl.board__column}>
          <h3>Learning</h3>
          <div>Advanced Algorithms</div>
          <div>Advanced Math</div>
          <div>English C1</div>
          <div>Jest JS</div>
        </div>
      </div>
    </div>
  )
}

export default MyBoard