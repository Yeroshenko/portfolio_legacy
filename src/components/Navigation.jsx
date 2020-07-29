import React from 'react'
import { NavLink } from 'react-router-dom'

import 'styles/components/Navigation.sass'

export const Navigation = () => (
  <nav className='navigation'>
    <div className='container'>
      <div className='navigation__columns'>
        <div className='navigation__column'>
          <ul className='navigation__links'>
            <li>
              <NavLink to='/about' className='navigation__link'>
                Обо мне
              </NavLink>
            </li>
            <li>
              <a
                href='http://frontendernotes.netlify.app'
                target='_blank'
                rel='noopener noreferrer'
                className='navigation__link'
              >
                Мой блог
              </a>
            </li>
          </ul>
        </div>
        <div className='navigation__column'>
          <div className='navigation__infos'>
            <ul className='navigation__info'>
            <li className='navigation__info-label'>Сейчас проживаю</li>
              <li>г. Хмельницкий, Украина</li>
            </ul>
            <ul className='navigation__info'>
            <li className='navigation__info-label'>Ел. почта</li>
              <li>
                <a href='mailto:valeriy.yeroshenko@gmail.com'>
                  valeriy.yeroshenko@gmail.com
                </a>
              </li>

            </ul>
            <ul className='navigation__info'>
              <li className='navigation__info-label'>Номер телефона</li>
              <li>
                <a href='tel:+380983193684'>+380 98 319 3684</a>
              </li>
            </ul>
            <ul className='navigation__info'>
              <li className='navigation__info-label'>Социальные сети</li>
              <li>Socail icons</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
)
