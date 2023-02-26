import Banner from 'src/components/Banner'
import Articles from 'src/modules/Articles'
import ArticleInfo from 'src/components/ArticleInfo'
import Text from 'src/ui/Text'

const Home = () => {
  return (
    <>
      <Banner text={`Студенська рада НУ "ОЮА"`}></Banner>
      <ArticleInfo />
      <Articles />
    </>
  )
}

export default Home
