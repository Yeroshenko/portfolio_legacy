import React, { useState,useEffect } from 'react'

import { homeAnimation } from 'animations'
import { IntroOverlay, Banner, Cases } from 'components'

export const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false)

  const completeAnomation = () => setAnimationComplete(true)

  useEffect(() => {
    homeAnimation(completeAnomation)
  }, [])

  return (
    <div>
      {!animationComplete && <IntroOverlay />}
      <Banner />
      <Cases />
    </div>
  )
}
