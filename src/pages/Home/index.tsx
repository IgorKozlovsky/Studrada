import Banner from 'src/components/Banner'
import Articles from 'src/modules/Articles'
import ArticleInfo from 'src/components/ArticleInfo'

const Home = () => {
  return (
    <>
      <Banner text={`Студентська рада НУ "ОЮА"`}></Banner>
      <ArticleInfo />
      <Articles />
    </>
  )
}

export default Home
