import StyledBanner from 'src/components/Banner/styles'
import Text from 'src/ui/Text'
import { breakpoints } from 'src/theme/primaryTheme/breakpoints'

const Banner = () => {
  return (
    <StyledBanner>
      <Text
        variant={'bannerText'}
        sx={{
          textAlign: 'center ',
          [`@media (max-width: ${breakpoints.sm})`]: {
            fontSize: '32px'
          }
        }}
      >
        Студенська рада <br /> НУ &quot;ОЮА&quot;
      </Text>
    </StyledBanner>
  )
}

export default Banner
