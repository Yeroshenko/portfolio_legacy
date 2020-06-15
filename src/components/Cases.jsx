import React from 'react'

import { ReactComponent as PrewArrow } from 'assets/arrow-left.svg'
import { ReactComponent as NextArrow } from 'assets/arrow-right.svg'
import 'styles/components/Cases.sass'

const allCases = [
  {
    id: 1,
    subtitle: 'Subtitle 1',
    title: 'I am case title 1',
    img: 'img-1.png'
  },
  {
    id: 2,
    subtitle: 'Subtitle 2',
    title: 'I am case title 2',
    img: 'img-2.png'
  },
  {
    id: 3,
    subtitle: 'Subtitle 3',
    title: 'I am case title 3',
    img: 'img-3.png'
  }
]

export const Cases = () => (
  <section className='cases'>
    <div className='container-fluid'>
      <div className='cases__navigation'>
        <div className='cases__arrow prew disabled'>
          <PrewArrow className='cases__arrow-icon' />
        </div>
        <div className='cases__arrow next'>
          <NextArrow className='cases__arrow-icon' />
        </div>
      </div>
      <div className='row cases__inner'>
        {allCases.map(({ id, subtitle, title, img }) => (
          <div className='case' key={id}>
            <div className='case__details'>
              <h3 className='case__subtitle'>{subtitle}</h3>
              <h2 className='case__title'>{title}</h2>
            </div>
            <div className='case__image'>
              <img src={require(`../assets/${img}`)} alt={title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
