import React from 'react'
import {useSelector} from 'react-redux'
import cl from './MyNavbar.module.css'
import ToogleSwitch from '../ToogleSwitch/ToogleSwitch'
const MyNavbar = () => {
  const theme = useSelector((state) => (state.theme))
  return (
    <div className={theme == 'dark' ? cl.navbarDark :cl.navbarLight}>
      <div>Sucevan Oleksandr</div>
      <ToogleSwitch></ToogleSwitch>
    </div>
  )
}

export default MyNavbar