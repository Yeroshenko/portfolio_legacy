import React from 'react'

import { ReactComponent as RightArrow } from 'assets/arrow-right.svg'
import 'styles/components/Banner.sass'

export const Banner = () => {
  return (
    <section className='banner'>
      <div className='container'>
        <div className='row banner__row'>
          <h2 className='banner__title'>
            <div className='banner__line'>
              <span>Creating unique brands is</span>
            </div>
            <div className='banner__line'>
              <span>what we do.</span>
            </div>
          </h2>
          <div className='banner__btn'>
            <a href='/' className='banner__btn-link'>
              Узнать больше <RightArrow className='banner__btn-icon' />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
