import gsap from 'gsap'

const tl = gsap.timeline()

export const homeAnimation = completeAnomation => {
  tl.from('.banner__line span', 1.8, {
    y: 100,
    ease: 'power4.out',
    delay: 1,
    skewY: 7,
    stagger: { amount: 0.3 }
  })
    .to('.overlay__top-item', 1.6, {
      height: 0,
      ease: 'expo.inOut',
      stagger: 0.4
    })
    .to('.overlay__bottom-item', 1.6, {
      width: 0,
      ease: 'expo.inOut',
      delay: -0.8,
      stagger: { amount: 0.4 }
    })
    .to('.intro-overlay', 0, { css: { display: 'none' } })
    .from('.case__image img', 1.6, {
      scale: 1.4,
      ease: 'expo.inOut',
      delay: -2,
      stagger: { amount: 0.4 },
      onComplete: completeAnomation
    })
}