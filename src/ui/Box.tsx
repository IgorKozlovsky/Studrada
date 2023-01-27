import styled, { CSSObject } from 'styled-components'
import { ReactNode } from 'react'

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

interface BoxProps {
  children?: ReactNode
}

const BoxBase = ({ as: Component = 'div', ...props }) => (
  <Component {...props} />
)

const Box = styled(BoxBase)(
  {
    boxSizing: 'border-box'
  },
  styleProps,
  ({ sx }: CSSObject) => sx
)
export default Box
