import { useState } from 'react'
import Flex from 'src/ui/Flex'
import { headerIcons, headerLinks } from 'src/pages/Layout/constants'
import Box from 'src/ui/Box'
import StyledLink from 'src/components/StyledLink'
import StyledImage from 'src/ui/Image'
import Logo from 'src/static/Logo.png'
import { breakpoints } from 'src/theme/primaryTheme/breakpoints'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const showMenuHandler = () => {
    setShowMenu((prev) => !prev)
  }

  return (
    <Box
      bg={'header'}
      sx={{
        height: showMenu ? '120%' : 'auto',
        width: '100%',
        position: 'fixed',
        top: '0'
      }}
    >
      <Flex
        px={6}
        py={2}
        sx={{
          [`@media (max-width: ${breakpoints.lg})`]: {
            padding: '8px 30px',
            touchAction: 'none',
            height: '4rem',
            justifyContent: 'space-between'
          },
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '100%',
          gap: '5em'
        }}
        bg={'header'}
      >
        <Box>
          <StyledImage src={Logo} sx={{ width: '4rem' }} />
        </Box>
        <Box
          sx={{
            gap: '3rem',
            display: 'flex',
            [`@media (max-width: ${breakpoints.lg})`]: {
              display: 'none'
            }
          }}
        >
          {headerLinks.map((e, i) => (
            <StyledLink key={i} href={e.href}>
              {e.name}
            </StyledLink>
          ))}{' '}
        </Box>
        <Box
          sx={{
            gap: '10px',
            alignItems: 'center',
            cursor: 'pointer',
            display: 'flex',
            [`@media (max-width: ${breakpoints.lg})`]: {
              display: 'none'
            }
          }}
        >
          {headerIcons.map((e, i) => (
            <StyledImage
              key={i}
              src={e}
              sx={{ width: '30px', height: '30px', filter: 'invert(100%)' }}
            />
          ))}
        </Box>
        <Box
          sx={{
            display: 'none',
            [`@media (max-width: ${breakpoints.lg})`]: {
              display: 'block'
            }
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            cursor="pointer"
            onClick={showMenuHandler}
          >
            <rect y="3" width="24" height="2" fill="white"></rect>
            <rect y="11" width="24" height="2" fill="white"></rect>
            <rect y="19" width="24" height="2" fill="white"></rect>
          </svg>
        </Box>
      </Flex>
      <Box
        onClick={showMenuHandler}
        sx={{
          display: showMenu ? 'flex' : 'none',
          position: 'fixed',
          width: '100%',
          height: '80%',
          borderTop: '5px solid #091f3a',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
        bg={'header'}
      >
        <Flex
          sx={{
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1vh'
          }}
        >
          {headerLinks.map((e, i) => (
            <StyledLink key={i} href={e.href}>
              {e.name}
            </StyledLink>
          ))}{' '}
        </Flex>
        <Flex
          mt={'8vh'}
          sx={{
            gap: '3rem',
            alignItems: 'center',
            cursor: 'pointer'
          }}
        >
          {headerIcons.map((e, i) => (
            <StyledImage
              key={i}
              src={e}
              sx={{
                width: '40px',
                height: '40px',
                filter: 'invert(100%)'
              }}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  )
}

export default Header
