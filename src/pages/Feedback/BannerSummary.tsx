import Flex from 'src/ui/Flex'
import Text from 'src/ui/Text'
import StyledImage from 'src/ui/Image'
import { breakpoints } from 'src/theme/primaryTheme/breakpoints'

const BannerSummary = () => {
  return (
    <Flex
      sx={{
        maxWidth: '1100px',
        width: '90%',
        position: 'relative',
        gap: '3rem',
        textAlign: 'start',
        [`@media (max-width: ${breakpoints.xl})`]: {
          margin: '0 auto'
        },
        [`@media (max-width: ${breakpoints.sm})`]: {
          flexDirection: 'column',
          gap: '2rem',
          marginTop: '25px'
        }
      }}
    >
      <StyledImage
        src={require('src/static/f1.png')}
        sx={{
          maxWidth: '25%',
          zIndex: '2',
          [`@media (max-width: ${breakpoints.sm})`]: {
            maxWidth: '35%'
          }
        }}
      />
      <StyledImage
        src={require('src/static/white-space.png')}
        sx={{
          width: '25%',
          position: 'absolute',
          translate: '8% 8%',
          [`@media (max-width: ${breakpoints.sm})`]: {
            width: '35%'
          }
        }}
      />
      <Flex sx={{ flexDirection: 'column', gap: '2rem' }}>
        <Flex
          sx={{
            flexDirection: 'column',
            paddingLeft: '1rem',
            [`@media (max-width: ${breakpoints.sm})`]: {
              paddingLeft: '0'
            }
          }}
        >
          <Text variant={'cardTitle'} sx={{ color: 'white' }}>
            Торговицька Дар’я Євгеніївна
          </Text>
          <Text variant={'subtitle'}>голова Студентської ради</Text>
        </Flex>
        <Text
          variant={'cardTitle'}
          sx={{
            color: 'white',
            borderLeft: '5px solid white',
            paddingLeft: '1rem',
            marginLeft: '17px',
            [`@media (max-width: ${breakpoints.lg})`]: {
              fontSize: '18px'
            },
            [`@media (max-width: ${breakpoints.sm})`]: {
              marginLeft: '0'
            }
          }}
        >
          Якщо у Вас є будь-які запитання, пропозиції або скарги - заповніть
          форму та опишіть її зміст. Ми у найкоротший термін Вам допоможемо!
        </Text>
      </Flex>
    </Flex>
  )
}

export default BannerSummary
