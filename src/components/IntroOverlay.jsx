import React from 'react'

import 'styles/components/IntroOverlay.sass'

export const IntroOverlay = () => (
  <div className='intro-overlay' data-animation='overlay'>
    <div className='intro-overlay__inner'>
      <div className='overlay__top'>
        <div className='overlay__top-item' data-animation='overlay-top' />
        <div className='overlay__top-item' data-animation='overlay-top' />
        <div className='overlay__top-item' data-animation='overlay-top' />
      </div>
      <div className='overlay__bottom'>
        <div className='overlay__bottom-item' data-animation='overlay-bottom' />
        <div className='overlay__bottom-item' data-animation='overlay-bottom' />
        <div className='overlay__bottom-item' data-animation='overlay-bottom' />
      </div>
    </div>
  </div>
)
