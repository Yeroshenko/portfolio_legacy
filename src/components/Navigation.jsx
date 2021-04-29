import React from 'react'
import { NavLink } from 'react-router-dom'

import { NavigationSocialLink } from 'components'
import { ReactComponent as GithubLogo } from 'assets/icons/github-logo.svg'
import { ReactComponent as LinkedinLogo } from 'assets/icons/linkedin-logo.svg'
import { ReactComponent as FacebookLogo } from 'assets/icons/facebook-logo.svg'
import { ReactComponent as InstagramLogo } from 'assets/icons/instagram-logo.svg'
import { ReactComponent as TelegramLogo } from 'assets/icons/telegram-logo.svg'
import 'styles/components/Navigation.sass'

export const Navigation = () => (
  <nav className='navigation'>
    <div className='container'>
      <div className='navigation__columns'>
        <div className='navigation__column'>
          <ul className='navigation__links'>
            <li>
              <NavLink to='/about' className='navigation__link'>
                Обо мне
              </NavLink>
            </li>
            <li>
              <a
                href='http://frontendernotes.netlify.app'
                target='_blank'
                rel='noopener noreferrer'
                className='navigation__link'
              >
                Мой блог
              </a>
            </li>
          </ul>
        </div>
        <div className='navigation__column'>
          <div className='navigation__infos'>
            <ul className='navigation__info'>
              <li className='navigation__info-label'>Сейчас проживаю</li>
              <li>г. Хмельницкий, Украина</li>
            </ul>
            <ul className='navigation__info'>
              <li className='navigation__info-label'>Ел. почта</li>
              <li>
                <a
                  href='mailto:valeriy.yeroshenko@gmail.com'
                  className='navigation__link'
                >
                  valeriy.yeroshenko@gmail.com
                </a>
              </li>
            </ul>
            <ul className='navigation__info'>
              <li className='navigation__info-label'>Номер телефона</li>
              <li>
                <a href='tel:+380936490370' className='navigation__link'>
                  +380 93 649 0370
                </a>
              </li>
            </ul>
            <ul className='navigation__info'>
              <li className='navigation__info-label'>Социальные сети</li>
              <li className='navigation__info-icons'>
                <NavigationSocialLink
                  to='https://github.com/Yeroshenko'
                  className='navigation__info-icon'
                >
                  <GithubLogo />
                </NavigationSocialLink>
                <NavigationSocialLink
                  to='https://www.linkedin.com/in/yeroshenko/'
                  className='navigation__info-icon'
                >
                  <LinkedinLogo />
                </NavigationSocialLink>

                <NavigationSocialLink
                  to='https://www.facebook.com/valeriy.yeroshenko/'
                  className='navigation__info-icon'
                >
                  <FacebookLogo />
                </NavigationSocialLink>
                <NavigationSocialLink
                  to='https://www.instagram.com/yeroshenko_/'
                  className='navigation__info-icon'
                >
                  <InstagramLogo />
                </NavigationSocialLink>
                <NavigationSocialLink
                  to='https://t.me/young_esthate'
                  className='navigation__info-icon'
                >
                  <TelegramLogo />
                </NavigationSocialLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
)
