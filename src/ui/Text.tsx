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
    fontSize: 4,
    color: 'text',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  title: {
    fontSize: 4,
    color: 'text',
    fontWeight: 'bold'
  },
  cardTitle: {
    fontSize: 3,
    color: 'cardTitle',
    fontWeight: 'bold'
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
    fontSize: 5,
    color: 'white',
    fontWeight: 'bold'
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
