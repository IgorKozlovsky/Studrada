import Flex from 'src/ui/Flex'
import { headerIcons, headerLinks } from 'src/pages/Layout/constants'
import Box from 'src/ui/Box'
import StyledLink from 'src/components/StyledLink'
import StyledImage from 'src/ui/Image'

interface HeaderBurgerProps {
  showMenu: boolean
  showMenuHandler: Function
}

const HeaderBurger = ({ showMenu, showMenuHandler }: HeaderBurgerProps) => {
  return (
    <Box
      onClick={showMenuHandler}
      sx={{
        display: showMenu ? 'flex' : 'none',
        position: 'fixed',
        width: '100%',
        height: '110%',
        paddingBottom: '50%',
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
  )
}

export default HeaderBurger
