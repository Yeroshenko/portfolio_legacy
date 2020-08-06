import React, { useEffect, useState } from 'react'
import gsap from 'gsap'

import { Context } from 'context'
import { updateVh, debounce, getOrientation } from 'utils'
import { useRoutes } from 'hooks'
import { Header, Navigation } from 'components'
import 'styles/App.sass'

const routes = useRoutes()

export const App = () => {
  const [orientation, setOrientation] = useState('portrait')

  const [dimesions, setDimesions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  // flash prevention
  gsap.to('body', 0, { css: { visibility: 'visible' } })

  // dimesions
  useEffect(() => {
    updateVh(dimesions.height)
    const debounceHandleResize = debounce(() => {
      setDimesions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    })

    window.addEventListener('resize', debounceHandleResize)
    return () => window.removeEventListener('resize', debounceHandleResize)
  }, [dimesions.height])

  // orientation
  useEffect(() => {
    setOrientation(getOrientation(window.screen.orientation.angle))
    const orientationChange = e => {
      setOrientation(getOrientation(e.target.screen.orientation.angle))
    }

    window.addEventListener('orientationchange', orientationChange)
    return () =>
      window.removeEventListener('orientationchange', orientationChange)
  }, [])

  return (
    <div className='app'>
      <Context.Provider value={{ orientation, dimesions }}>
        <Header />
        <div className='content' data-animation='content'>
          {routes}
        </div>
        <Navigation />
      </Context.Provider>
    </div>
  )
}
