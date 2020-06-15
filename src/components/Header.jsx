import React, { useState, useEffect } from 'react'
import { withRouter, NavLink } from 'react-router-dom'

import { openMenuAnimation, closeMenuAnimation } from 'animations'
import { ReactComponent as UpArrow } from 'assets/up-arrow-circle.svg'
import 'styles/components/Header.sass'

export const Header = withRouter(({ history, dimesions }) => {
  const [menuOpened, setMenuOpened] = useState(false)

  const openMenu = () => setMenuOpened(true)
  const closeMenu = () => setMenuOpened(false)

  useEffect(() => {
    history.listen(() => closeMenu())

    menuOpened ? openMenuAnimation(dimesions.width) : closeMenuAnimation()
  }, [menuOpened, dimesions, history])

  return (
    <div className='header'>
      <div className='container'>
        <div className='row v-center space-between'>
          <div className='logo'>
            <NavLink to='/'>Yeroshenko.</NavLink>
          </div>
          <div className='nav-toggle'>
            <div className='hamberger-menu' onClick={openMenu}>
              <span />
              <span />
            </div>
            <div className='hamberger-menu_close' onClick={closeMenu}>
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
