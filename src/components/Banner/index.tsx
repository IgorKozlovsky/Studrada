import StyledBanner from 'src/components/Banner/styles'
import Text from 'src/ui/Text'

const Banner = () => {
  return (
    <StyledBanner>
      <Text variant={'bannerText'} sx={{ textAlign: 'center ' }}>
        Студенська рада <br /> НУ &quot;ОЮА&quot;
      </Text>
    </StyledBanner>
  )
}

export default Banner
