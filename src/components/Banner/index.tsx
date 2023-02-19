import Flex from 'src/ui/Flex'
import img from 'src/static/banner.png'
import Text from 'src/ui/Text'

const Banner = () => {
  return (
    <Flex
      sx={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text variant={'bannerText'} sx={{ textAlign: 'center ' }}>
        Студенська рада <br /> НУ &quot;ОЮА&quot;
      </Text>
    </Flex>
  )
}

export default Banner
