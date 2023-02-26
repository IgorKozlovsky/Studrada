import styled, { CSSObject } from 'styled-components'
import {
  color,
  space,
  typography,
  shadow,
  layout,
  compose,
  variant
} from 'styled-system'

const styleText = compose(color, space, typography, layout, shadow)

const TextBase = ({ as: Component = 'textarea', ...props }) => (
  <Component {...props} />
)

const Textarea = styled(TextBase)(({ sx }: CSSObject) => sx)

export default Textarea
