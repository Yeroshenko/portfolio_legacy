import React from 'react'
import { NavLink } from 'react-router-dom'

import { ReactComponent as RightArrow } from 'assets/arrow-right.svg'
import 'styles/components/Banner.sass'

export const Banner = () => (
  <section className='banner'>
    <div className='container'>
      <div className='row banner__row'>
        <h2 className='banner__title'>
          <div className='banner__line'>
            <span>Создание топовых сайтов</span>
          </div>
          <div className='banner__line'>
            <span>от топ кодера.</span>
          </div>
        </h2>
        <div className='banner__btn'>
          <NavLink to='/about' className='banner__btn-link'>
            Узнать больше <RightArrow className='banner__btn-icon' />
          </NavLink>
        </div>
      </div>
    </div>
  </section>
)
