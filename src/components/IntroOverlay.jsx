import React, { useContext } from 'react'

import { Context } from 'context'
import { getSectionStyleHeight } from 'utils'
import 'styles/components/IntroOverlay.sass'

export const IntroOverlay = () => {
  const { orientation, dimesions } = useContext(Context)
  const heightStyles = getSectionStyleHeight(orientation, dimesions)

  return (
    <div className='intro-overlay' data-animation='overlay'>
      <div className='intro-overlay__inner'>
        <div className='overlay__top' style={heightStyles}>
          <div className='overlay__top-item' data-animation='overlay-top' />
          <div className='overlay__top-item' data-animation='overlay-top' />
          <div className='overlay__top-item' data-animation='overlay-top' />
        </div>
        <div className='overlay__bottom' style={heightStyles}>
          <div
            className='overlay__bottom-item'
            data-animation='overlay-bottom'
          />
          <div
            className='overlay__bottom-item'
            data-animation='overlay-bottom'
          />
          <div
            className='overlay__bottom-item'
            data-animation='overlay-bottom'
          />
        </div>
      </div>
    </div>
  )
}
