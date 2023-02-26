import React, { useState } from 'react'
import styled from 'styled-components'
import { space, SpaceProps, width } from 'styled-system'
import Flex from 'src/ui/Flex'
import Text from 'src/ui/Text'
import { breakpoints } from 'src/theme/primaryTheme/breakpoints'

interface Props extends SpaceProps {
  text: string
  for: string
}

const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid #8993ae;
  border-radius: 4px;
  font-size: 16px;
`

const StyledLabel = styled.label`
  display: block;
  margin: 0 0 5px 8px;
  font-size: 16px;
`

const InputWithLabel: React.FC<Props> = ({ text, ...props }) => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        width: '40%',
        [`@media (max-width: ${breakpoints.sm})`]: {
          width: '90%'
        }
      }}
    >
      <StyledLabel htmlFor={props.for}>
        <Text variant={'subText'}>{text}</Text>
      </StyledLabel>
      <StyledInput type="text" id={props.for} />
    </Flex>
  )
}

export default styled(InputWithLabel)(space)
