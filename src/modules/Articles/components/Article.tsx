import React from 'react'
import { IArticle } from 'src/modules/Articles/types'
import Flex from 'src/ui/Flex'
import StyledImage from 'src/ui/Image'
import Text from 'src/ui/Text'
import { breakpoints } from 'src/theme/primaryTheme/breakpoints'

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
        width: '30%',
        [`@media (max-width: ${breakpoints.md})`]: {
          width: '40%'
        },
        [`@media (max-width: ${breakpoints.sm})`]: {
          width: '85%'
        }
      }}
    >
      <StyledImage src={article.img} sx={{}} />
      <Text variant={'cardTitle'}>{article.title}</Text>
      <Text variant={'subText'}>{article.date}</Text>
    </Flex>
  )
}

export default Article
