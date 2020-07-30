import React from 'react'
import { NavLink } from 'react-router-dom'

import { ReactComponent as RightArrow } from 'assets/icons/arrow-right.svg'
import 'styles/components/Banner.sass'

export const Banner = () => (
  <section className='banner'>
    <div className='container'>
      <div className='row banner__row'>
        <h2 className='banner__title'>
          <div className='banner__line'>
            <span data-animation='banner-line'>Валерий Ерошенко</span>
          </div>
          <div className='banner__line'>
            <span data-animation='banner-line'>Front-end розработчик</span>
          </div>
        </h2>
        <div className='banner__btn'>
          <NavLink to='#' className='banner__btn-link'>
            Скачать резюме <RightArrow className='banner__btn-icon' />
          </NavLink>
        </div>
      </div>
    </div>
  </section>
)
