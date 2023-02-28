import { useState } from 'react'
import Flex from 'src/ui/Flex'
import { headerIcons, headerLinks } from 'src/pages/Layout/constants'
import Box from 'src/ui/Box'
import HeaderBurger from 'src/pages/Layout/components/Header/HeaderBurger'
import HeaderBurgerButton from 'src/pages/Layout/components/Header/HeaderBurgerButton'
import { NavLink } from 'react-router-dom'
import StyledLink from 'src/components/StyledLink'
import StyledImage from 'src/ui/Image'
import Logo from 'src/static/Logo.png'
import { breakpoints } from 'src/theme/primaryTheme/breakpoints'
import { width } from 'styled-system'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const showMenuHandler = () => {
    setShowMenu((prev) => !prev)
  }

  return (
    <Box
      bg={'header'}
      sx={{
        zIndex: '10',
        height: showMenu ? '120%' : 'auto',
        width: '100%',
        [`@media (max-width: ${breakpoints.lg})`]: {
          position: 'sticky'
        },
        top: '0'
      }}
    >
      <Flex
        px={6}
        py={2}
        sx={{
          [`@media (max-width: ${breakpoints.lg})`]: {
            padding: '8px 30px',
            height: '4rem'
          },
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          gap: '5em'
        }}
        bg={'header'}
      >
        <Flex
          sx={{
            width: '150px',
            justifyContent: 'flex-end',
            [`@media (max-width: ${breakpoints.sm})`]: {
              width: '60px'
            }
          }}
        >
          <NavLink to="/">
            <StyledImage src={Logo} sx={{ width: '3.5rem' }} />
          </NavLink>
        </Flex>
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
          <HeaderBurgerButton showMenuHandler={showMenuHandler} />
        </Box>
      </Flex>
      <HeaderBurger showMenu={showMenu} showMenuHandler={showMenuHandler} />
    </Box>
  )
}

export default Header
