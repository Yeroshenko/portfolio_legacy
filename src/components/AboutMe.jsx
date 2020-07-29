import React from 'react'

import 'styles/components/AboutMe.sass'

export const AboutMe = ({ aboutMe = '' }) => (
  <div className='about-me'>
    <h2 className='about-me__title'>Обо мне</h2>
    <p className='about-me__text'>{aboutMe}</p>
  </div>
)
