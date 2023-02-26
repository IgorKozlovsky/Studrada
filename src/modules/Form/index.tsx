import SendButton from 'src/modules/Form/components/SendButton'
import Flex from 'src/ui/Flex'
import Text from 'src/ui/Text'
import Textarea from 'src/ui/Textarea'
import InputWithLabel from 'src/modules/Form/components/InputField'
import SideCard from 'src/modules/Form/components/SideCard'
import { breakpoints } from 'src/theme/primaryTheme/breakpoints'

const Form = () => {
  return (
    <Flex
      sx={{
        [`@media (max-width: ${breakpoints.lg})`]: {
          flexDirection: 'column'
        },
        [`@media (max-width: ${breakpoints.sm})`]: {
          translate: '0 -8vh'
        },
        maxWidth: '1100px',
        width: '90%',
        translate: '0 -18vh',
        backgroundColor: 'white',
        margin: '0 auto',
        boxShadow: '5px 10px 18px #0000005a'
      }}
    >
      <form>
        <Flex
          sx={{
            flexWrap: 'wrap',
            margin: '0 5rem',
            [`@media (max-width: ${breakpoints.sm})`]: {
              margin: '0 2rem'
            },
            gap: '2rem'
          }}
        >
          <Text variant={'cardTitle'} sx={{ paddingTop: '3rem' }}>
            Звернення до Голови Студентської ради НУ “ОЮА”
          </Text>
          <InputWithLabel text={'ПІБ'} for={'name'}></InputWithLabel>
          <InputWithLabel text={'E-mail'} for={'email'}></InputWithLabel>
          <InputWithLabel
            text={'Факультет, курс / посада'}
            for={'faculty'}
          ></InputWithLabel>
          <Flex sx={{ alignItems: 'center', paddingTop: '20px' }}>
            <label htmlFor="anonymously">
              <Text variant={'text'}>Звернутися анонімно</Text>
            </label>
            <input type="checkbox" name="" id="anonymously" />
          </Flex>
          <Flex sx={{ flexDirection: 'column', width: '100%' }}>
            <label htmlFor="message">
              <Text variant={'subText'}>Повідомлення</Text>
            </label>
            <Textarea
              id="message"
              sx={{
                border: ' 1px solid #8993ae',
                height: '7rem',
                resize: 'none'
              }}
            />
          </Flex>
          <Flex
            sx={{
              width: '100%',
              justifyContent: 'flex-end',
              translate: '20px -50px'
            }}
          >
            <SendButton sx={{ border: 'none', background: 'transparent' }}>
              <img src={require('src/static/send.png')} />
            </SendButton>
          </Flex>
        </Flex>
      </form>
      <Flex
        sx={{
          [`@media (max-width: ${breakpoints.lg})`]: {
            width: 'auto',
            height: '350px',
            backgroundImage: `url(${require('src/static/banner.png')})`,
            backgroundPosition: 'bottom'
          },
          [`@media (max-width: ${breakpoints.sm})`]: {
            width: 'auto',
            height: '350px',
            backgroundImage: `url(${require('src/static/form-background.png')})`,
            backgroundPosition: 'center'
          },
          width: '60%',
          padding: '4rem 1rem 1rem 3rem',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundImage: `url(${require('src/static/form-background.png')})`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <SideCard />
      </Flex>
    </Flex>
  )
}

export default Form
