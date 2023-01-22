import React from 'react'
import Section from 'src/components/Section'
import Flex from 'src/ui/Flex'
import Text from 'src/ui/Text'
import Grid from 'src/ui/Grid'
import StyledImage from 'src/ui/Image'
import pic1 from 'src/static/a1.png'
import pic2 from 'src/static/a2.png'
import pic3 from 'src/static/a3.png'
import pic4 from 'src/static/a4.png'

const ArticleInfo = () => {
  return (
    <Section>
      <Flex sx={{ justifyContent: 'space-evenly', paddingTop: '70px' }}>
        <Flex sx={{ flexDirection: 'column', width: '40%' }}>
          <Text
            sx={{ fontSize: '36px', color: '#1A2A61', marginBottom: '15px' }}
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
            інтелектуального розвитку. Основними завданнями органів
            студентського самоврядування є: - забезпечення та захист прав і
            інтересів студентів; - забезпечення виконання студентами своїх
            обов&apos;язків; - забезпечення ефективної комунікації між
            студентами та адміністрацією, а також викладачами; - сприяння
            навчальній, науковій та творчій діяльності студентів;
          </Text>
        </Flex>
        <Grid
          sx={{
            gap: '10px',
            gridTemplateColumns: 'auto auto',
            justifyContent: 'center'
            // flex: '50%'
          }}
        >
          <StyledImage src={pic1} sx={{ width: '200px', height: '150px' }} />
          <StyledImage
            src={pic2}
            sx={{
              width: '180px',
              height: '200px',
              justifySelf: 'end',
              transform: 'translate(-20px, 0px)'
            }}
          />
          <StyledImage
            src={pic3}
            sx={{
              width: '180px',
              height: '280px',
              transform: 'translate(0px, -50px)'
            }}
          />
          <StyledImage
            src={pic4}
            sx={{
              width: '200px',
              height: '230px',
              alignSelf: 'end',
              transform: 'translate(-20px, -50px)'
            }}
          />
          {/* <StyledImage src={pic1} sx={{ width: '200px' }} />
          <StyledImage src={pic2} sx={{ width: '200px' }} />
          <StyledImage src={pic3} sx={{ width: '200px' }} />
          <StyledImage src={pic4} sx={{ width: '200px' }} /> */}
        </Grid>
      </Flex>
    </Section>
  )
}
export default ArticleInfo
