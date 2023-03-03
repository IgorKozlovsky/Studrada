import { IArticle } from 'src/modules/Articles/types'
import Flex from 'src/ui/Flex'
import StyledImage from 'src/ui/Image'
import Text from 'src/ui/Text'
import StyledArticle from './StyledArticle'
interface ArticleProps {
  article: IArticle
}

const Article = ({ article }: ArticleProps) => {
  return (
    <StyledArticle>
      <StyledImage src={article.img} sx={{}} />
      <Text variant={'cardTitle'}>{article.title}</Text>
      <Text variant={'subText'}>{article.date}</Text>
    </StyledArticle>
  )
}

export default Article
