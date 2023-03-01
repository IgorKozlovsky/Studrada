import React from 'react'
import { IMembers } from 'src/modules/Members/types'
import Flex from 'src/ui/Flex'
import StyledImage from 'src/ui/Image'
import Text from 'src/ui/Text'
import Box from 'src/ui/Box'
import { breakpoints } from 'src/theme/primaryTheme/breakpoints'

interface MembersProps {
  member: IMembers
}

const Member = ({ member }: MembersProps) => {
  const wrapperWidth =
    member.role === 'head'
      ? '100%'
      : member.role === 'deputyhead'
      ? '40%'
      : '20%'

  const imgWidth = member.role.includes('head') ? '245px' : '200px'

  return (
    <Flex
      sx={{
        minWidth: '230px',
        textAlign: 'center',
        width: wrapperWidth,
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px'
        // [`@media (max-width: ${breakpoints.md})`]: {
        //   width: '40%'
        // },
        // [`@media (max-width: ${breakpoints.sm})`]: {
        //   width: '85%'
        // }
      }}
    >
      <StyledImage
        src={member.img}
        sx={{
          width: imgWidth
        }}
      />
      <Text variant={'cardTitle'}>{member.name}</Text>
      <Text variant={'subText'}>{member.title}</Text>
    </Flex>
  )
}

export default Member
