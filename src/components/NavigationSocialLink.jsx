import React from 'react'

export const NavigationSocialLink = ({
  className = '',
  newTab = true,
  to = '/',
  children,
  ...props
}) => (
  <a
    href={to}
    target={newTab ? '_blank' : '_self'}
    rel='noopener noreferrer'
    className={className}
    {...props}
  >
    {children}
  </a>
)
