export const theme = {
  colors: {
    emerald10: '#DFF2ED',
    emerald20: '#B2DFD0',
    emerald30: '#80CAB1',
    emerald40: '#47B494',
    emerald50: '#018383',
    primary: '#014687',
    gradientPrimary: 'linear-gradient(135deg, #018383, #014687)',
    gradientSubtle: 'linear-gradient(135deg, #F5FFFB, #FFFFFF)',
    gradientSecondary: 'linear-gradient(135deg, #008392, #00BC89)',
    white: '#FFFFFF',
    gray10: '#F5F5F5',
    gray20: '#E0E0E0',
    gray30: '#BDBDBD',
    text: '#1A1A1A',
  },
  fonts: {
    family: 'Nunito, sans-serif',
    sizes: {
      headlineXl: '48px',
      headlineLg: '40px',
      headlineBase: '32px',
      headlineSm: '24px',
      textXl: '18px',
      textBase: '16px',
      textSm: '14px',
      textXs: '12px',
    },
  },
  spacing: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '48px',
  },
}

export type Theme = typeof theme