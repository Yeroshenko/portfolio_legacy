import React from 'react'

import { skills, aboutMe } from 'content'
import { AboutMe, Skills, PageBackground } from 'components'
import 'styles/pages/About.sass'

export const About = () => (
  <div className='about-page'>
    <PageBackground>About</PageBackground>
    <div className='container'>
      <div className='row '>
        <div className='about-page__content'>
          <AboutMe aboutMe={aboutMe} />
          <Skills skills={skills} />
        </div>
      </div>
    </div>
  </div>
)
