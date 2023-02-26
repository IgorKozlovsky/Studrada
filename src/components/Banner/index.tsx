import StyledBanner from 'src/components/Banner/styles'
import Text from 'src/ui/Text'
import { breakpoints } from 'src/theme/primaryTheme/breakpoints'

interface BannerProps {
  text?: string
  children?: React.ReactNode
}

const Banner = ({ text, children }: BannerProps) => {
  return (
    <StyledBanner>
      <Text
        variant={'bannerText'}
        sx={{
          textAlign: 'center ',
          maxWidth: '420px',
          [`@media (max-width: ${breakpoints.sm})`]: {
            fontSize: '32px',
            maxWidth: '290px'
          }
        }}
      >
        {text}
      </Text>
      {children}
    </StyledBanner>
  )
}

export default Banner
