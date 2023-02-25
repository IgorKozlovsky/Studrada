import styled, { CSSObject } from 'styled-components'

const Image = styled.img(
  {
    objectFit: 'contain',
    // height: '100%',
    width: '100%'
  },
  ({ sx }: CSSObject) => sx
)

const StyledImage = ({ src = 'ff.png', sx = {} }): JSX.Element => (
  <Image src={src} alt="image" sx={sx} />
)
export default StyledImage
