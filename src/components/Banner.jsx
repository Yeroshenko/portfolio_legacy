import React, { useContext } from 'react'

import { Context } from 'context'
import { summaryLink } from 'content'
import { getSectionStyleHeight } from 'utils'
import { ReactComponent as RightArrow } from 'assets/icons/arrow-right.svg'
import 'styles/components/Banner.sass'

export const Banner = () => {
  const { orientation, dimesions } = useContext(Context)
  const bannerStyles = getSectionStyleHeight(orientation, dimesions)

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
              href={summaryLink || '/'}
              className='banner__btn-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              Скачать резюме
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
