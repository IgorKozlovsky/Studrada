import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import Text from 'src/ui/Text'
import Box from 'src/ui/Box'
import Flex from 'src/ui/Flex'
import styled, { CSSObject } from 'styled-components'

type LinkProps = {
  href: string
  children: ReactNode
}

const StyledBox = styled.div`
  color: white;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
  line-height: 48px;
  text-align: center;
`

const StyledLink: React.FC<LinkProps> = ({ href = '/', children }) => {
  return (
    <NavLink
      to={href}
      style={{
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <StyledBox>
        <Text variant={'subtitle'}>{children}</Text>
      </StyledBox>
    </NavLink>
  )
}

export default StyledLink
