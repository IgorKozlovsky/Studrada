import React from 'react'
import Section from 'src/components/Section'
import Flex from 'src/ui/Flex'
import { headerLinks } from 'src/modules/Layout/constants'
import Box from 'src/ui/Box'
import StyledLink from 'src/components/StyledLink'
import StyledImage from 'src/ui/Image'

const Header = () => {
  return (
    <Section>
      <Flex
        p={3}
        bg={'primary'}
        sx={{
          width: '100%'
        }}
      >
        <Box>
          <StyledImage src="src/static/Logo.png" />
        </Box>
        <Flex sx={{ gap: '15px' }}>
          {headerLinks.map((e, i) => (
            <StyledLink key={i} href={e.href}>
              {e.name}
            </StyledLink>
          ))}
        </Flex>
        <Flex sx={{ gap: '5px' }}>{}</Flex>
      </Flex>
    </Section>
  )
}

export default Header
