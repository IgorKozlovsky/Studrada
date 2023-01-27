import React from 'react'
import Section from 'src/components/Section'
import Button from 'src/ui/Button'
import Flex from 'src/ui/Flex'
import Text from 'src/ui/Text'
import Article from 'src/modules/Articles/components/Article'
import { articles } from 'src/modules/Articles/constants'

const Articles = () => {
  return (
    <Section>
      <Flex sx={{ flexDirection: 'column', alignItems: 'center', gap: '48px' }}>
        <Text variant={'header'}>Новини Студентської ради</Text>
        <Flex sx={{ flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {articles.map((e, i) => (
            <Article key={i} article={e} />
          ))}
        </Flex>
        <Button variant="primary">Більше</Button>
      </Flex>
    </Section>
  )
}

export default Articles
