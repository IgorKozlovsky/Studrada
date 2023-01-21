import styled, { CSSObject } from 'styled-components'
import {
  color,
  space,
  border,
  layout,
  position,
  background,
  flexbox,
  grid,
  size,
  compose
} from 'styled-system'

const styleProps = compose(
  color,
  space,
  border,
  layout,
  position,
  background,
  flexbox,
  grid,
  size
)

const Box = styled.div(
  {
    boxSizizng: 'border-box'
  },
  styleProps,
  ({ sx }: CSSObject) => sx
)
export default Box
