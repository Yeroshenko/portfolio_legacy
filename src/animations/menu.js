import gsap from 'gsap'

const tl = gsap.timeline()

export const openMenuAnimation = (width, onStart, onComplete) => {
  tl.to('body', {
    duration: 0.01,
    css: { overflow: 'hidden' },
    onStart: onStart
  })
    .to('.content', {
      duration: 1,
      y: width <= 654 ? '70vh' : window.innerHeight / 2,
      ease: 'expo.inOut'
    })
    .to('.hamberger-menu span', {
      duration: 0.6,
      delay: -1,
      scaleX: 0,
      transformOrigin: '50% 0%',
      ease: 'expo.inOut'
    })
    .to('#Path_1', {
      duration: 0.4,
      delay: -0.6,
      css: { strokeDashoffset: 10, strokeDasharray: 5 }
    })
    .to('#Path_2', {
      duration: 0.4,
      delay: -0.6,
      css: { strokeDashoffset: 10, strokeDasharray: 20 }
    })
    .to('#Line_1', {
      duration: 0.4,
      delay: -0.6,
      css: { strokeDashoffset: 40, strokeDasharray: 18 }
    })
    .to('#circle', {
      duration: 0.6,
      delay: -0.8,
      css: { strokeDashoffset: 0 }
    })
    .to('.hamberger-menu_close', {
      duration: 0.6,
      delay: -0.8,
      css: { display: 'block' },
      onComplete: onComplete
    })
}

export const closeMenuAnimation = (onStart, onComplete) => {
  tl.to('.content', {
    duration: 1,
    y: 0,
    ease: 'expo.inOut',
    onStart: onStart
  })
    .to('#circle', {
      duration: 0.6,
      delay: -0.6,
      css: { strokeDashoffset: -193, strokeDasharray: 227 }
    })
    .to('#Path_1', {
      duration: 0.4,
      delay: -0.6,
      css: { strokeDashoffset: 10, strokeDasharray: 10 }
    })
    .to('#Path_2', {
      duration: 0.4,
      delay: -0.6,
      css: { strokeDashoffset: 10, strokeDasharray: 10 }
    })
    .to('#Line_1', {
      duration: 0.4,
      delay: -0.6,
      css: { strokeDashoffset: 40, strokeDasharray: 40 }
    })
    .to('.hamberger-menu span', {
      duration: 0.6,
      delay: -0.6,
      scaleX: 1,
      transformOrigin: '50% 0%',
      ease: 'expo.inOut'
    })
    .to('.hamberger-menu_close', { css: { display: 'none' } })
    .to('body', {
      css: { overflow: 'auto' },
      onComplete: onComplete
    })
}