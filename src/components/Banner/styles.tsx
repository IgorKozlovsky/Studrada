import styled from 'styled-components'
import Flex from 'src/ui/Flex'

const StyledBanner = styled(Flex)`
  background-image: url(${require('src/static/banner.png')});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default StyledBanner
