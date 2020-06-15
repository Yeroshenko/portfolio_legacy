import React, { useState } from 'react'
import cn from 'classnames'
import Swiper from 'react-id-swiper'

import { ReactComponent as PrewArrow } from 'assets/arrow-left.svg'
import { ReactComponent as NextArrow } from 'assets/arrow-right.svg'
import 'styles/components/Cases.sass'

const allCases = [
  {
    id: 1,
    subtitle: 'Subtitle 1',
    title: 'I am case title 1',
    img: 'img-1.png',
    link: 'https://example.com'
  },
  {
    id: 2,
    subtitle: 'Subtitle 2',
    title: 'I am case title 2',
    img: 'img-2.png',
    link: 'https://example.com'
  },
  {
    id: 3,
    subtitle: 'Subtitle 3',
    title: 'I am case title 3',
    img: 'img-3.png',
    link: 'https://example.com'
  }
]

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
          <div className='cases__arrow prew'>
            <PrewArrow className='cases__arrow-icon' onClick={goPrev} />
          </div>
          <div className='cases__arrow next' onClick={goNext}>
            <NextArrow className='cases__arrow-icon' />
          </div>
        </div>
        <Swiper getSwiper={updateSwiper} {...swiperParams}>
          {allCases.map(({ id, subtitle, title, img, link }) => (
            <a
              className='case'
              target='_blank'
              rel='noopener noreferrer'
              href={link}
              key={id}
            >
              <div className='case__details'>
                <h3 className='case__subtitle'>{subtitle}</h3>
                <h2 className='case__title'>{title}</h2>
              </div>
              <div className='case__image'>
                <img src={require(`../assets/${img}`)} alt={title} />
              </div>
            </a>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
