import React from 'react'
import Section from 'src/components/Section'
import Flex from 'src/ui/Flex'
import Text from 'src/ui/Text'
import Grid from 'src/ui/Grid'
import StyledImage from 'src/ui/Image'
import { breakpoints } from 'src/theme/primaryTheme/breakpoints'

const ArticleInfo = () => {
  return (
    <Section>
      <Flex
        p={3}
        sx={{
          justifyContent: 'space-between',
          gap: '25px',
          [`@media (max-width: ${breakpoints.lg})`]: {
            flexDirection: 'column'
          }
        }}
      >
        <Flex
          sx={{
            flexDirection: 'column',
            width: '50%',
            [`@media (max-width: ${breakpoints.lg})`]: {
              width: 'auto'
            }
          }}
        >
          <Text
            variant={'title'}
            sx={{
              [`@media (max-width: ${breakpoints.sm})`]: {
                fontSize: '28px'
              },
              marginBottom: '15px'
            }}
          >
            Студентське самоврядування Національного університету «Одеська
            юридична академія»
          </Text>
          <Text sx={{ fontSize: '18px', color: '#283159' }}>
            Студентська рада - це, перш за все, орган студентського
            самоврядування. А також, це організація, яка існує виключно на
            ентузіазмі її учасників, які самі задають собі мету, ставлять
            завдання, знаходять шляхи їх вирішення і досягають бажаних
            результатів. Основна мета - сприяння сумлінному виконанню студентами
            своїх обов&apos;язків з одночасним захистом своїх законних прав та
            інтересів, а також надання їм можливості творчого та
            інтелектуального розвитку.
            <br />
            <br />
            Основними завданнями органів студентського самоврядування є:
            <br />
            <br /> - забезпечення та захист прав і інтересів студентів;
            <br /> - забезпечення виконання студентами своїх обов&apos;язків;
            <br /> - забезпечення ефективної комунікації між студентами та
            адміністрацією, а також викладачами;
            <br /> - сприяння навчальній, науковій та творчій діяльності
            студентів;
          </Text>
        </Flex>
        <StyledImage
          src={require('src/static/article-picture.png')}
          sx={{
            objectFit: 'contain',
            width: '40%',
            [`@media (max-width: ${breakpoints.lg})`]: {
              margin: '0 auto',
              width: '50%'
            },
            [`@media (max-width: ${breakpoints.sm})`]: {
              width: '100%'
            }
          }}
        />
      </Flex>
    </Section>
  )
}
export default ArticleInfo
