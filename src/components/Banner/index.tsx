<<<<<<< HEAD
import Flex from 'src/ui/Flex'

const Banner = () => {
  return (
    <Flex>
      <img src={require('src/static/banner.png')} width="100%" />
    </Flex>
=======
import StyledBanner from 'src/components/Banner/styles'
import Text from 'src/ui/Text'

const Banner = () => {
  return (
    <StyledBanner>
      <Text variant={'bannerText'} sx={{ textAlign: 'center ' }}>
        Студенська рада <br /> НУ &quot;ОЮА&quot;
      </Text>
    </StyledBanner>
>>>>>>> create-banner
  )
}

export default Banner
