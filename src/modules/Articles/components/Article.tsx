import React from 'react'
import { IArticle } from 'src/modules/Articles/types'
import Flex from 'src/ui/Flex'
import StyledImage from 'src/ui/Image'
import Text from 'src/ui/Text'

interface ArticleProps {
  article: IArticle
}

const Article = ({ article }: ArticleProps) => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        alignItems: 'left',
        gap: '10px',
        width: '30%'
      }}
    >
      <StyledImage src={article.img} sx={{}} />
      <Text variant={'title'}>{article.title}</Text>
      <Text variant={'subText'}>{article.date}</Text>
    </Flex>
  )
}

export default Article
