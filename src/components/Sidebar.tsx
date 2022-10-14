import React from 'react'
import '../styles/sidebar.scss'
import Profile from '../assets/profile.jpg'
import Home from '../assets/icons/home.png'
import Education from '../assets/icons/education.png'
import Skills from '../assets/icons/skills.png'
import Project from '../assets/icons/project.png'
import Experience from '../assets/icons/experience.png'
import NavItem from './common/NavItem'

interface ISidebar {
  scroll: number
  onClick: (top: number) => void
}

const Sidebar = ({ scroll, onClick }: ISidebar) => {

  const countActive = (scroll: number, path: string) => {
    if (path === 'home' && scroll >= 0 && scroll < 570) return true 
    if (path === 'education' && scroll >= 570 && scroll < 570 * 2) return true 
    if (path === 'skills' && scroll >= 570 * 2 - 10 && scroll < 570 * 3 - 10) return true 
    if (path === 'experience' && scroll >= 570 * 3 - 10 && scroll < 570 * 4 - 10) return true 
    return false
  }

  return (
    <nav className={'sidebar'}>
      <div className={'profile'}>
        <img src={Profile} alt="" />
      </div>
      <NavItem handler={() => onClick(0)} active={countActive(scroll, 'home')} name={'Home'} img={Home} />
      <NavItem handler={() => onClick(580)} active={countActive(scroll, 'education')} name={'Education'} img={Education} />
      <NavItem handler={() => onClick(1145)} active={countActive(scroll, 'skills')} name={'Skills'} img={Skills} />
      <NavItem handler={() => onClick(1715)} active={countActive(scroll, 'experience')} name={'Experience'} img={Experience} />
      <NavItem handler={() => onClick(0)} active={countActive(scroll, 'project')} name={'Project'} img={Project} />
    </nav>
  )
}

export default Sidebar