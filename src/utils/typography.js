import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.666,
  headerWeight: '600',
  headerFontFamily: ['Montserrat', 'sans-serif'],
  headerColor: 'rgba(0, 0, 0, 0.8)',
  bodyFontFamily: ['Montserrat', 'sans-serif'],
  bodyColor: 'rgba(0, 0, 0, 0.75)',
  bodyWeight: '300',
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h1: {
      ...adjustFontSizeTo('34px')
    },
    h2: {
      ...adjustFontSizeTo('30px')
    },
    h3: {
      ...adjustFontSizeTo('26px')
    },
    h4: {
      ...adjustFontSizeTo('22px')
    },
    h5: {
      ...adjustFontSizeTo('18px')
    }
  }),
})


// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
