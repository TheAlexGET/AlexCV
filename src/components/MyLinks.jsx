import React from 'react'
import {useSelector} from 'react-redux'
const MyLinks = () => {
  const theme = useSelector((state) => (state.theme))
  return (
    <div className='myLinks'>
      <h1 className='projects__header'>My Links</h1>
      <div className='links'>
        <div href=""><img src="src/assets/gmail.png" alt="" className='links__img'/></div>
        <a href="https://www.linkedin.com/in/alexandr-sucevan-834216267"><img src="src/assets/linkedin.png" alt="" className='links__img'/></a>
        <a href="https://t.me/sucevan"><img src="src/assets/telegram.png" alt="" className='links__img'/></a>
      </div>
      <div className={theme == 'dark' ? 'links__linkDark' : 'links__linkLight'}>sucevanalex06@gmail.com</div>
    </div>
  )
}

export default MyLinks