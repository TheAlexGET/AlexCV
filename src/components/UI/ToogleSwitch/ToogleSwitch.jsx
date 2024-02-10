import React from 'react'
import cl from './ToogleSwitch.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { toogleTheme } from '../../../store/themeReducer';

const ToogleSwitch = () => {
  const dispatch = useDispatch()
  const handleThemeChange = () => {
    dispatch(toogleTheme())
  }
  return (
    <label className={cl.switch}>
        <input type="checkbox" defaultChecked/>
        <span className={cl.slider} onClick={handleThemeChange}></span>
    </label>
  )
}

export default ToogleSwitch