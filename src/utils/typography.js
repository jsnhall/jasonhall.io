import Typography from 'typography'
import Rubik from 'typeface-rubik'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Rubik', 'sans-serif'],
  headerWeight: '900',
  bodyFontFamily: ['-system UI', 'Open Sans', 'sans-serif'],
  googleFonts: [
    {
      name: 'Lato',
      styles: [
        '900',
      ],
    },
    {
      name: 'Open Sans',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h1: {
      ...adjustFontSizeTo('32px')
    },
    h2: {
      ...adjustFontSizeTo('30px')
    },
    h3: {
      ...adjustFontSizeTo('28px')
    },
    h4: {
      ...adjustFontSizeTo('26px')
    },
    h5: {
      ...adjustFontSizeTo('24px')
    },
    h6: {
      ...adjustFontSizeTo('22px')
    },
  }),
})


// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
