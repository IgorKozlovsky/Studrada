import { breakpoints } from 'src/theme/primaryTheme/breakpoints'
import { palette } from 'src/theme/primaryTheme/palette'
import { fontSizes } from 'src/theme/primaryTheme/typography'
import { TPrimaryTheme } from 'src/theme/types'

const space: number[] = [0, 4, 8, 16, 32, 64, 128, 256, 512]

const primaryTheme: TPrimaryTheme = {
  colors: palette,
  fontSizes,
  space,
  breakpoints
}
export default primaryTheme
