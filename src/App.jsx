import React, { useEffect } from 'react'

import { Header, Banner } from 'components'
import 'styles/App.sass'

function App() {

  useEffect(() => {
    const vh = window.innerHeight * .01
    document.documentElement.style.setProperty('--vh', `${vh}px`) // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
  }, [])

  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <Banner />
      </div>
    </div>
  )
}

export default App
