export type TPrimaryTheme = {
  colors: TPalette
  fontSizes: TFontSizes
  space: number[]
  breakpoints: TBreakpoints
}
export type TPalette = {
  primary: string
  header: string
  bannerFrom: string
  text: string
  subText: string
  white: string
}
export type TFontSizes = number[] & {
  small?: number
  medium?: number
  large?: number
  larger?: number
}
export type TBreakpoints = string[] & {
  sm?: string
  md?: string
  lg?: string
  xl?: string
}
