import React from 'react'
import { NavLink } from 'react-router-dom'

import 'styles/components/Navigation.sass'

export const Navigation = () => {
  return (
    <nav className='navigation'>
      <div className='container'>
        <div className='navigation__columns'>
          <div className='navigation__column'>
            <div className='navigation__label'>Menu</div>
            <ul className='navigation__links'>
              <li>
                <NavLink to='/about' className='navigation__link'>About me</NavLink>
              </li>
            </ul>
          </div>
          <div className='navigation__column'>
            <div className='navigation__label'>Contact</div>
            <div className='navigation__infos'>
              <ul className='navigation__info'>
                <li className='navigation__info-label'>Email</li>
                <li>Send to Email</li>
              </ul>
              <ul className='navigation__info'>
                <li className='navigation__info-label'>Headquarteres</li>
                <li>Kyiv, Ukraine</li>
              </ul>
              <ul className='navigation__info'>
                <li className='navigation__info-label'>Phone</li>
                <li>+380 98 319 3684</li>
              </ul>
              <ul className='navigation__info'>
                <li className='navigation__info-label'>Social links</li>
                <li>Socail icons</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
