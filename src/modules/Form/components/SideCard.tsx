import Flex from 'src/ui/Flex'
import Text from 'src/ui/Text'
import StyledImage from 'src/ui/Image'
import { headerIcons } from 'src/pages/Layout/constants'

const SideCard = () => {
  return (
    <>
      <Text variant={'subtitle'}>Контактна інформація</Text>
      <Flex sx={{ gap: '2rem', flexDirection: 'column' }}>
        <Text variant={'smallText'}>
          Наша адреса: м.&nbsp;Одеса,&nbsp;Фонтанська&nbsp;дорога, 23
        </Text>
        <Text variant={'smallText'}>
          Електронна пошта:{' '}
          <a href="#" style={{ color: 'white' }}>
            studrada@onua.edu.ua
          </a>
        </Text>

        <Flex sx={{ gap: '0.5rem' }}>
          {headerIcons.map((e, i) => (
            <StyledImage
              key={i}
              src={e}
              sx={{ width: '30px', height: '30px', filter: 'invert(100%)' }}
            />
          ))}
        </Flex>
      </Flex>
      <Text variant={'footnote'}>
        Надсилаючи повідомлення ви автоматично даєте згоду на обробку
        персональних даних
      </Text>
    </>
  )
}

export default SideCard
