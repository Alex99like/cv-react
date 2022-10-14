import React from 'react'
import '../../styles/scroll.scss'

interface IScroll {
  scroll: number
}

const Scroll = ({ scroll }: IScroll) => {

  const countActive = (scroll: number, path: string) => {
    if (path === 'home' && scroll >= 0 && scroll < 570) return true 
    if (path === 'education' && scroll >= 570 && scroll < 570 * 2) return true 
    if (path === 'skills' && scroll >= 570 * 2 - 10 && scroll < 570 * 3 - 10) return true 
    if (path === 'experience' && scroll >= 570 * 3 - 10 && scroll < 570 * 4 - 10) return true 
    return false
  }

  return (
    <div className={'scroll-container'}>
      <span className={countActive(scroll, 'home') ? 'active' : ''}></span>
      <span className={countActive(scroll, 'education') ? 'active' : ''}></span>
      <span className={countActive(scroll, 'skills') ? 'active' : ''}></span>
      <span className={countActive(scroll, 'experience') ? 'active' : ''}></span>
      <span className={countActive(scroll, 'project') ? 'active' : ''}></span>
    </div>
  )
}

export default Scroll