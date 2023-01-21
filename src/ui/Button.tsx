import styled, { CSSObject } from 'styled-components'
import {
  color,
  space,
  typography,
  border,
  size,
  variant,
  compose
} from 'styled-system'

const styleButtons = compose(color, space, typography, border, size)

const variants = {
  primary: {
    borderWidth: '1px',
    BorderStyle: 'solid',
    borderColor: 'primary',
    backgroundColor: 'primary',
    cursor: 'pointer',
    color: 'white',
    letterSpacing: 1,
    py: 2,
    px: 3,
    fontSize: 2,
    ':hover': {
      opacity: 0.8
    }
  }
}

const StyledButton = styled('button')(
  styleButtons,
  variant({
    variants
  }),
  ({ sx }: CSSObject) => sx
)

const Button = ({
  variant = '',
  sx = {},
  children = '',
  ...props
}): JSX.Element => {
  return (
    <StyledButton variant={variant} sx={sx} {...props}>
      {children}
    </StyledButton>
  )
}

export default Button
