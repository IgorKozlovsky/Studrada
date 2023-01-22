import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
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
`

const StyledLink: React.FC<LinkProps> = ({ href = '/', children }) => {
  return (
    <NavLink to={href} style={{ textDecoration: 'none' }}>
      <StyledBox>{children}</StyledBox>
    </NavLink>
  )
}

export default StyledLink
