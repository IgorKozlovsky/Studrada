import styled from 'styled-components'
import Flex from 'src/ui/Flex'
import { breakpoints } from 'src/theme/primaryTheme/breakpoints'

const StyledArticle = styled(Flex)`
  flex-direction: column;
  align-items: left;
  gap: 10px;
  width: 30%;
  @media (max-width: ${breakpoints.md}) {
    width: 40%;
  }
  @media (max-width: ${breakpoints.sm}) {
    width: 85%;
  }
`

export default StyledArticle
