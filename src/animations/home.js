import gsap from 'gsap'

const tl = gsap.timeline()

export const homeAnimation = completeAnimation => {
  tl.from(`[data-animation='banner-line']`, 1.8, {
    y: 100,
    ease: 'power4.out',
    delay: 1,
    skewY: 7,
    stagger: { amount: 0.3 }
  })
    .to(`[data-animation='overlay-top']`, 1.6, {
      height: 0,
      ease: 'expo.inOut',
      stagger: 0.4
    })
    .to(`[data-animation='overlay-bottom']`, 1.6, {
      width: 0,
      ease: 'expo.inOut',
      delay: -0.8,
      stagger: { amount: 0.4 }
    })
    .to(`[data-animation='overlay']`, 0, { css: { display: 'none' } })
    .from(`[data-animation='case-image']`, 1.6, {
      scale: 1.4,
      ease: 'expo.inOut',
      delay: -2,
      stagger: { amount: 0.4 },
      onComplete: completeAnimation
    })
}
