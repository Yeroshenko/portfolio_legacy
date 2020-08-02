import React from 'react'

import 'styles/components/Skills.sass'

export const Skills = ({ skills = [] }) => (
  <div className='skills'>
    <h2 className='skills__title'>Мои навыки</h2>
    <ul className='skills__lists'>
      {skills.map(({ category, technologies }, index) => (
        <li className='skills__list' key={index}>
          <h3 className='skills__list-title'>{category}:</h3>
          <ul className='skills__list-content'>
            {technologies.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
)
