import React from 'react'

import 'styles/components/IntroOverlay.sass'

export const IntroOverlay = () => {
  return (
    <div className='intro-overlay'>
      <div className='intro-overlay__inner'>
        <div className='overlay__top'>
          <div className='overlay__top-item'></div>
          <div className='overlay__top-item'></div>
          <div className='overlay__top-item'></div>
        </div>
        <div className='overlay__bottom'>
          <div className='overlay__bottom-item'></div>
          <div className='overlay__bottom-item'></div>
          <div className='overlay__bottom-item'></div>
        </div>
      </div>
    </div>
  )
}
