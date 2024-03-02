import React from 'react'
import {useSelector} from 'react-redux'
import gmail from '/src/assets/gmail.png'
import linkedin from '/src/assets/linkedin.png'
import telegram from '/src/assets/telegram.png'
import githubBlack from '/src/assets/githubBlack.png'
import githubWhite from '/src/assets/githubWhite.png'
const MyLinks = () => {
  const theme = useSelector((state) => (state.theme))
  return (
    <div className='myLinks'>
      <h1 className='projects__header'>My Links</h1>
      <div className='links'>
        <a target="_blank" href="mailto:sucevanalex06@gmail.com"><img src={gmail} alt="" className='links__img'/></a>
        <a target="_blank" href="https://www.linkedin.com/in/alexandr-sucevan-834216267"><img src={linkedin} alt="" className='links__img'/></a>
        <a target="_blank" href="https://t.me/sucevan"><img src={telegram} alt="" className='links__img'/></a>
        <a href="https://github.com/TheAlexGET" target='_blank'><img src={theme == 'dark' ? githubWhite : githubBlack} alt="" className='links__img'/></a>
      </div>
      <div className={theme == 'dark' ? 'links__linkDark' : 'links__linkLight'}>sucevanalex06@gmail.com</div>
    </div>
  )
}

export default MyLinks