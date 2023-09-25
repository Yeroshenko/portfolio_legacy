import React, { useContext } from 'react'

import { Context } from 'context'
import { getSectionStyleHeight } from 'utils'
import { ReactComponent as RightArrow } from 'assets/icons/arrow-right.svg'
import 'styles/components/Banner.sass'

const cvLink = 'https://drive.google.com/file/d/1LzInPw5a8Z1CaUvvGPZ7BicOta0g-God/view' 

export const Banner = () => {
  const { orientation, dimensions } = useContext(Context)
  const bannerStyles = getSectionStyleHeight(orientation, dimensions)

  return (
    <section className='banner' style={bannerStyles}>
      <div className='container'>
        <div className='row banner__row'>
          <h2 className='banner__title'>
            <div className='banner__line'>
              <span data-animation='banner-line'>Валерий Ерошенко</span>
            </div>
            <div className='banner__line'>
              <span data-animation='banner-line'>Front-end разработчик</span>
            </div>
          </h2>
          <div className='banner__btn'>
            <a
              href={cvLink}
              className='banner__btn-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              Смотреть резюме
              <span className='banner__btn-circle'>
                <RightArrow className='banner__btn-icon' />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
