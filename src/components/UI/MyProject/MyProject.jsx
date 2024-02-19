import React from 'react'
import cl from './MyProject.module.css'
import {useSelector} from 'react-redux'

const MyProject = ({prev, title, info, link}) => {
  const theme = useSelector((state) => (state.theme))
  return (
    <div className={cl.projects__project}>
      <img src={prev} className={cl.projects__prev}/>
      <div className={cl.projects__about}>
        <div className={cl.projects__title}>{title}</div>
        <div className={cl.projects__info}>{info}</div>
        <a target='_blank' href={link} className={theme == 'dark' ? cl.projects__linkDark : cl.projects__linkLight}>{link}</a>
      </div>
    </div>
  )
}

export default MyProject