import React, { useState, useEffect, useCallback, useContext } from 'react'
import { withRouter, NavLink } from 'react-router-dom'

import { Context } from 'context'
import { openMenuAnimation, closeMenuAnimation } from 'animations'
import 'styles/components/Header.sass'

export const Header = withRouter(({ history }) => {
  const [animated, setAnimated] = useState(false)
  const { orientation, dimesions } = useContext(Context)

  const openMenu = () => {
    !animated &&
      openMenuAnimation(
        dimesions.width,
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
          <div className='nav-toggle'>
            <div className='hamberger-menu' onClick={openMenu}>
              <span data-animation='gamburger-line' />
              <span data-animation='gamburger-line' />
            </div>
            <div
              className='hamberger-menu_close'
              data-animation='gamburger-close'
              onClick={closeMenu}
            >
              <svg width='64' height='64' viewBox='0 0 64 64'>
                <g id='Group_1' transform='translate(-152 -439)'>
                  <line
                    data-animation='menu-arrow-line-1'
                    y1='14.91'
                    transform='translate(184 463.788)'
                    fill='none'
                    stroke='#000'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2.5'
                  />
                  <path
                    data-animation='menu-arrow-path-1'
                    d='M6,9.155,10.949,5'
                    transform='translate(173.051 458.302)'
                    fill='none'
                    stroke='#000'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2.5'
                  />
                  <path
                    data-animation='menu-arrow-path-2'
                    d='M10.949,5,15.9,9.155'
                    transform='translate(173.051 458.302)'
                    fill='none'
                    stroke='#000'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2.5'
                  />
                  <g
                    id='Ellipse_1'
                    transform='translate(152 439)'
                    fill='none'
                    stroke='rgba(0,0,0,0.2)'
                    strokeWidth='2.5'
                  >
                    <circle cx='32' cy='32' r='32' stroke='none' />
                    <circle
                      data-animation='menu-arrow-circle'
                      cx='32'
                      cy='32'
                      r='30.75'
                      fill='none'
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
