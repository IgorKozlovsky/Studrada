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

const variants = {
  header: {
    fontSize: 2,
    color: 'text'
  },
  subText: {
    fontSize: 0,
    color: 'subText'
  },
  text: {
    fontSize: 1,
    color: 'text'
  },
  bannerText: {
    fontSize: 3,
    color: 'white'
  }
}
const TextBase = ({ as: Component = 'p', ...props }) => <Component {...props} />

const Text = styled(TextBase)(
  {
    padding: 0,
    margin: 0
  },
  styleText,
  variant({ variants }),
  ({ sx }: CSSObject) => sx
)

export default Text
