import React from 'react'
import Section from 'src/components/Section'
import Button from 'src/ui/Button'
import Flex from 'src/ui/Flex'
import Box from 'src/ui/Box'
import Grid from 'src/ui/Grid'
import Text from 'src/ui/Text'
import Member from 'src/modules/Members/components/Member'
import { members } from 'src/modules/Members/constants'
import { breakpoints } from 'src/theme/primaryTheme/breakpoints'

const Members = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${require('src/static/1.png')})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center'
      }}
    >
      <Flex sx={{ flexDirection: 'column', alignItems: 'center', gap: '48px' }}>
        <Text
          variant={'header'}
          sx={{
            [`@media (max-width: ${breakpoints.sm})`]: {
              fontSize: '28px'
            }
          }}
        >
          Управління Студентської ради
        </Text>
        <Flex
          sx={{
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            padding: '0 25px',
            gap: '2rem',
            [`@media (max-width: ${breakpoints.sm})`]: {
              justifyContent: 'center'
            }
          }}
        >
          {members.map((e, i) => (
            <Member key={i} member={e} />
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Members

// const Members = () => {
//   return (
//     <Section>
//       <Flex sx={{ flexDirection: 'column', alignItems: 'center', gap: '48px' }}>
//         <Text variant={'header'}>Управління Студентської ради</Text>
//         <Grid
//           sx={{
//             gridTemplateColumns: 'repeat(4, 1fr)',
//             gridGap: '10px'
//             // gridTemplateAreas: `"head"
//             //                     "deputyhead deputyhead deputyhead deputyhead"
//             //                     "member member member member"`
//             // justifyContent: 'space-around'
//             // padding: '0 25px',
//             // gap: '2rem',
//             // [`@media (max-width: ${breakpoints.sm})`]: {
//             //   justifyContent: 'center'
//             // }
//           }}
//         >
//           {members.map((e, i) => (
//             <Member key={i} member={e} />
//           ))}
//         </Grid>
//       </Flex>
//     </Section>
//   )
// }
