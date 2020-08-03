import gsap from 'gsap'

const tl = gsap.timeline()

export const openMenuAnimation = (width, orientation, onStart, onComplete) => {
  const YOffset = window.pageYOffset

  const contentTranslate = (orientation, width, YOffset = 0) => {
    if (orientation === 'landscape') {
      return 100 + YOffset + 'vh'
    }

    return width <= 654 ? '60vh' : '50vh'
  }

  tl.to('body', {
    duration: 0.01,
    css: { overflow: 'hidden' },
    onStart: onStart
  })
    .to(`[data-animation='content']`, {
      duration: 1,
      y: contentTranslate(orientation, width, YOffset),
      ease: 'expo.inOut'
    })
    .to(`[data-animation='gamburger-line']`, {
      duration: 0.6,
      delay: -1,
      scaleX: 0,
      transformOrigin: '50% 0%',
      ease: 'expo.inOut'
    })
    .to(`[data-animation='menu-arrow-path-1']`, {
      duration: 0.4,
      delay: -0.6,
      css: { strokeDashoffset: 10, strokeDasharray: 5 }
    })
    .to(`[data-animation='menu-arrow-path-2']`, {
      duration: 0.4,
      delay: -0.6,
      css: { strokeDashoffset: 10, strokeDasharray: 20 }
    })
    .to(`[data-animation='menu-arrow-line-1']`, {
      duration: 0.4,
      delay: -0.6,
      css: { strokeDashoffset: 40, strokeDasharray: 18 }
    })
    .to(`[data-animation='menu-arrow-circle']`, {
      duration: 0.6,
      delay: -0.8,
      css: { strokeDashoffset: 0 }
    })
    .to(`[data-animation='gamburger-close']`, {
      duration: 0.6,
      delay: -0.8,
      css: { display: 'block' },
      onComplete: onComplete
    })
}

export const closeMenuAnimation = (onStart, onComplete) => {
  tl.to(`[data-animation='content']`, {
    duration: 1,
    y: 0,
    ease: 'expo.inOut',
    onStart: onStart
  })
    .to(`[data-animation='menu-arrow-circle']`, {
      duration: 0.6,
      delay: -0.6,
      css: { strokeDashoffset: -193, strokeDasharray: 227 }
    })
    .to(`[data-animation='menu-arrow-path-1']`, {
      duration: 0.4,
      delay: -0.6,
      css: { strokeDashoffset: 10, strokeDasharray: 10 }
    })
    .to(`[data-animation='menu-arrow-path-2']`, {
      duration: 0.4,
      delay: -0.6,
      css: { strokeDashoffset: 10, strokeDasharray: 10 }
    })
    .to(`[data-animation='menu-arrow-line-1']`, {
      duration: 0.4,
      delay: -0.6,
      css: { strokeDashoffset: 40, strokeDasharray: 40 }
    })
    .to(`[data-animation='gamburger-line']`, {
      duration: 0.6,
      delay: -0.6,
      scaleX: 1,
      transformOrigin: '50% 0%',
      ease: 'expo.inOut'
    })
    .to(`[data-animation='gamburger-close']`, { css: { display: 'none' } })
    .to('body', {
      css: { overflow: 'auto' },
      onComplete: onComplete
    })
}
