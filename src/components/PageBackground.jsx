import React from 'react'

import 'styles/components/PageBackground.sass'

export const PageBackground = ({ children, fontSize = '22vw' }) => {
  return (
    <div className='page-background' style={{ fontSize }}>
      {children}
    </div>
  )
}
