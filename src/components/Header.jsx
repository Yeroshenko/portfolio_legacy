import React from 'react'

import 'styles/components/Header.sass'

export const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='row v-center space-between'>
          <div className='logo'>
            <a href='/'>Yeroshenko.</a>
          </div>
          <nav className='nav'>
            <span />
            <span />
          </nav>
        </div>
      </div>
    </div>
  )
}
