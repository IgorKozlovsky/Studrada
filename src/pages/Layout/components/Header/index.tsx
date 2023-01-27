import Flex from 'src/ui/Flex'
import { headerIcons, headerLinks } from 'src/pages/Layout/constants'
import Box from 'src/ui/Box'
import StyledLink from 'src/components/StyledLink'
import StyledImage from 'src/ui/Image'
import Logo from 'src/static/Logo.png'

const Header = () => {
  return (
    <Flex
      px={6}
      py={2}
      sx={{
        justifyContent: 'space-between',
        width: '100%'
      }}
      bg={'header'}
    >
      <Box>
        <StyledImage src={Logo} sx={{ width: '60px' }} />
      </Box>
      <Flex sx={{ gap: '5em' }}>
        {headerLinks.map((e, i) => (
          <StyledLink key={i} href={e.href}>
            {e.name}
          </StyledLink>
        ))}
      </Flex>
      <Flex sx={{ gap: '10px', alignItems: 'center', cursor: 'pointer' }}>
        {headerIcons.map((e, i) => (
          <StyledImage
            key={i}
            src={e}
            sx={{ width: '40px', height: '40px', filter: 'invert(100%)' }}
          />
        ))}
      </Flex>
    </Flex>
  )
}

export default Header
