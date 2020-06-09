import React, { useEffect } from 'react'

import { Header, Banner, Cases } from 'components'
import 'styles/App.sass'

function App() {
  useEffect(() => {
    updateVh()
  }, [])

  const updateVh = () => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`) // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
  }

  return (
    <div className='App'>
      <Header />
      <Banner />
      <Cases />
    </div>
  )
}

export default App
