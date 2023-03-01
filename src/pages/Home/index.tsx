import Banner from 'src/components/Banner'
import Articles from 'src/modules/Articles'
import ArticleInfo from 'src/components/ArticleInfo'
import Members from 'src/modules/Members'

const Home = () => {
  return (
    <>
      <Banner text={`Студентська рада НУ "ОЮА"`}></Banner>
      <ArticleInfo />
      <Members></Members>
      <Articles />
    </>
  )
}

export default Home
