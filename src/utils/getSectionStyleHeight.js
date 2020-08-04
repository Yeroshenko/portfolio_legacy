export const getSectionStyleHeight = (orientation, dimesions) => ({
  height: orientation === 'landscape' ? '100vhc' : dimesions.height / 2
})
