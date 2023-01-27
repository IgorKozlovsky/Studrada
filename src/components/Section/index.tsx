import { ReactNode } from 'react'
import Box from 'src/ui/Box'
import Flex from 'src/ui/Flex'

type SectionProps = {
  children?: ReactNode
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <Flex
      my={[5, 5]}
      sx={{
        justifyContent: 'center'
      }}
    >
      <Flex
        sx={{
          maxWidth: '1200px',
          width: '100%'
        }}
      >
        {children}
      </Flex>
    </Flex>
  )
}

export default Section
