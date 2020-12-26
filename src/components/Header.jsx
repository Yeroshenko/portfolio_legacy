import React, { useState, useEffect, useCallback, useContext } from 'react'
import { withRouter, NavLink } from 'react-router-dom'

import { Context } from 'context'
import { openMenuAnimation, closeMenuAnimation } from 'animations'
import 'styles/components/Header.sass'
import { NavToggle } from './NavToggle'

export const Header = withRouter(({ history }) => {
  const [animated, setAnimated] = useState(false)
  const { orientation, dimensions } = useContext(Context)

  const openMenu = () => {
    !animated &&
      openMenuAnimation(
        dimensions.width,
        orientation,
        startAnimation,
        completeAnimation
      )
  }
  const closeMenu = useCallback(() => {
    !animated && closeMenuAnimation(startAnimation, completeAnimation)
  }, [animated])

  const startAnimation = () => setAnimated(true)
  const completeAnimation = () => setAnimated(false)

  useEffect(() => {
    history.listen(() => closeMenu())
    // eslint-disable-next-line
  }, [history]) // not add closeMenu to dependency

  return (
    <div className='header'>
      <div className='container'>
        <div className='row v-center space-between'>
          <div className='logo'>
            <NavLink to='/'>Yeroshenko.</NavLink>
          </div>
          <NavToggle openMenu={openMenu} closeMenu={closeMenu} />
        </div>
      </div>
    </div>
  )
})
