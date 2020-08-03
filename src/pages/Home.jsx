import React, { useState, useEffect } from 'react'

import { homeAnimation } from 'animations'
import { IntroOverlay, Banner, Cases } from 'components'

export const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false)

  const completeAnimation = () => setAnimationComplete(true)

  useEffect(() => {
    homeAnimation(completeAnimation)
  }, [])

  return (
    <>
      {!animationComplete && <IntroOverlay />}
      <Banner />
      <Cases />
    </>
  )
}
