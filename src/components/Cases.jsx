import React, { useState } from 'react'
import cn from 'classnames'
import Swiper from 'react-id-swiper'

import { allCases } from 'content'
import { ReactComponent as PrewArrow } from 'assets/icons/arrow-left.svg'
import { ReactComponent as NextArrow } from 'assets/icons/arrow-right.svg'
import 'styles/components/Cases.sass'

export const Cases = () => {
  const [swiper, updateSwiper] = useState(null)

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext()
    }
  }
  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev()
    }
  }

  const swiperParams = {
    direction: 'horizontal',
    slidesPerView: 3,
    mousewheel: true,
    breakpoints: {
      768: { slidesPerView: 3, loop: false },
      320: { slidesPerView: 1, loop: true }
    }
  }

  return (
    <section className='cases'>
      <div className='container-fluid'>
        <div
          className={cn('cases__navigation', {
            'cases__navigation--hiden': allCases.length <= 3
          })}
        >
          <div className='cases__arrow prew' onClick={goPrev}>
            <PrewArrow className='cases__arrow-icon' />
          </div>
          <div className='cases__arrow next' onClick={goNext}>
            <NextArrow className='cases__arrow-icon' />
          </div>
        </div>
        <Swiper getSwiper={updateSwiper} {...swiperParams}>
          {allCases.map(({ stack, title, img, link }, index) => (
            <a
              className='case'
              target='_blank'
              rel='noopener noreferrer'
              href={link}
              key={index}
            >
              <div className='case__details'>
                <h3 className='case__stack'>{stack}</h3>
                <h2 className='case__title'>{title}</h2>
              </div>
              <div className='case__image'>
                <img
                  src={require(`../assets/cases/${img}`)}
                  alt={title}
                  data-animation='case-image'
                />
              </div>
            </a>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
