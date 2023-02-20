import React from 'react'
import Section from 'src/components/Section'
import Button from 'src/ui/Button'
import Flex from 'src/ui/Flex'
import Text from 'src/ui/Text'
import Article from 'src/modules/Articles/components/Article'
import { articles } from 'src/modules/Articles/constants'
import Grid from 'src/ui/Grid'

const Articles = () => {
  return (
    <Section>
      <Flex
        sx={{
          flexDirection: 'column',
          textAlign: 'center',
          gap: '48px',
          width: '100%'
        }}
      >
        <Text variant={'header'}>Новини Студентської ради</Text>
        <Grid
          sx={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}
        >
          {articles.map((e, i) => (
            <Article key={i} article={e} />
          ))}
        </Grid>
        <Button variant="primary" sx={{ alignSelf: 'center' }}>
          Більше
        </Button>
      </Flex>
    </Section>
  )
}

export default Articles
