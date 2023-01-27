import React from 'react'
import Flex from 'src/ui/Flex'
import picture from 'src/static/banner.jpg'
import styled from 'styled-components'
import Text from 'src/ui/Text'

const BannerFlex = styled(Flex)`
  justify-content: center;
  align-items: center;
  filter: blur(3px);
  background-image: linear-gradient(
      45deg,
      rgba(2, 0, 36, 0.9) 15%,
      rgba(0, 6, 132, 0.6) 47%,
      rgba(28, 102, 223, 0.8072478991596639) 85%
    ),
    url(${picture});
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
`

const Banner = () => {
  return (
    <BannerFlex>
      <Text>Студентська рада НУ &quot;ОЮА&quot;</Text>
    </BannerFlex>
  )
}

export default Banner
