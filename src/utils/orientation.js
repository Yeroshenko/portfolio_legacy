export const getOrientation = angle =>
  angle === 0 || angle === 270 ? 'portrait' : 'landscape'

export const getSectionStyleHeight = (orientation, { width, height }) => ({
  height: orientation === 'landscape' && width <= 768 ? '100vh' : height / 2
})
