import React, { useState, useEffect, useCallback } from 'react'
import { withRouter, NavLink } from 'react-router-dom'

import { openMenuAnimation, closeMenuAnimation } from 'animations'
import { ReactComponent as UpArrow } from 'assets/icons/up-arrow-circle.svg'
import 'styles/components/Header.sass'

export const Header = withRouter(({ history, dimesions }) => {
  const [animated, setAnimated] = useState(false)

  const openMenu = () => {
    !animated &&
      openMenuAnimation(dimesions.width, startAnimation, completeAnimation)
  }
  const closeMenu = useCallback(() => {
    !animated && closeMenuAnimation(startAnimation, completeAnimation)
  }, [animated])

  const startAnimation = () => setAnimated(true)
  const completeAnimation = () => setAnimated(false)

  useEffect(() => {
    history.listen(() => closeMenu())
  }, [history]) // not add closeMenu to dependency

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
