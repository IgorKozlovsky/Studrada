import styled from 'styled-components'
import Flex from 'src/ui/Flex'
import { breakpoints } from 'src/theme/primaryTheme/breakpoints'

const StyledBanner = styled(Flex)`
  background-image: url(${require('src/static/banner.png')});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 85vh;
  min-height: 500px;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${breakpoints.lg}) {
    height: 60vh;
  }
`

export default StyledBanner
