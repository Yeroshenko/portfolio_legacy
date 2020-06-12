export const updateVh = (height) => {

  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`) // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
}