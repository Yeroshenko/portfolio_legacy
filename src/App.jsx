import React, { useEffect, useState } from 'react'
import gsap from 'gsap'

import { updateVh, debounce } from 'utils'
import { useRoutes } from 'hooks'
import { Header, Navigation } from 'components'
import 'styles/App.sass'

const routes = useRoutes()

const App = () => {
  const [dimesions, setDimesions] = useState({
    height: window.innerHeight,
    wigth: window.innerWidth
  })

  // flash prevention
  gsap.to('body', 0, { css: { visibility: 'visible' } })

  useEffect(() => {
    updateVh(dimesions.height)

    const debounceHandleResize = debounce(() => {
      setDimesions({
        height: window.innerHeight,
        wigth: window.innerWidth
      })
    })

    window.addEventListener('resize', debounceHandleResize)
    return () => window.removeEventListener('resize', debounceHandleResize)
  }, [dimesions.height])
  return (
    <div className='App'>
      <Header />
      <div className='content'>{routes}</div>
      <Navigation />
    </div>
  )
}

export default App
