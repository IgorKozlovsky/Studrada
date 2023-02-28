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
  subtitle: {
    fontSize: 2,
    color: 'white'
  },
  cardTitle: {
    fontSize: 3,
    color: 'cardTitle',
    fontWeight: '500'
  },
  smallText: {
    fontSize: 1,
    color: 'white'
  },
  subText: {
    fontSize: 1,
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
  },
  footnote: {
    fontSize: 0,
    color: 'white'
  }
}
const TextBase = ({ as: Component = 'p', ...props }) => <Component {...props} />

const Text = styled(TextBase)(
  {
    padding: 0,
    margin: 0,
    fontFamily: "'Barlow Semi Condensed', sans-serif"
  },
  styleText,
  variant({ variants }),
  ({ sx }: CSSObject) => sx
)

export default Text
