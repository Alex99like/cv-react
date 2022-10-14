import React from 'react'

interface INavItem {
  img: string
  name: string
  active: boolean
  handler: () => void
}

const NavItem = ({img, name, active, handler}: INavItem) => {
  return (
    <div onClick={() => handler()} className={`item-nav ${active ? 'active' : ''}`}>
      <img src={img} alt='' />
      <h4>{name}</h4>
    </div>
  )
}

export default NavItem