export const getSectionStyleHeight = (orientation, dimesions) => ({
  height: orientation === 'landscape' ? dimesions.height : dimesions.height / 2
})
