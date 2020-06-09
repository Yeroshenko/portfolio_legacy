import React, { useEffect } from 'react'
import gsap from 'gsap'

import { IntroOverlay, Header, Banner, Cases } from 'components'
import 'styles/App.sass'

const App = () => {
  const updateVh = () => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`) // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
  }

  useEffect(() => {
    updateVh()

    // prevents flashing
    gsap.to('body', 0, { css: { visibility: 'visible' } })

    // timeline
    const tl = gsap.timeline()

    tl.from('.banner__line span', 1.8, {
      y: 100,
      ease: 'power4.out',
      delay: 1,
      skewY: 7,
      stagger: { amount: 0.3 }
    })
      .to('.overlay__top-item', 1.6, {
        height: 0,
        ease: 'expo.inOut',
        stagger: 0.4
      })
      .to('.overlay__bottom-item', 1.6, {
        width: 0,
        ease: 'expo.inOut',
        delay: -0.8,
        stagger: { amount: 0.4 }
      })
      .to('.intro-overlay', 0, { css: { display: 'none'} })
      .from('.case__image img', 1.6, {
        scale: 1.4,
        ease: 'expo.inOut',
        delay: -2,
        stagger: { amount: 0.4 }
      })
  }, [])

  return (
    <div className='App'>
      <IntroOverlay />
      <Header />
      <Banner />
      <Cases />
    </div>
  )
}

export default App
