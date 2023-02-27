import Banner from 'src/components/Banner'
import Form from 'src/modules/Form'
import BannerSummary from 'src/pages/Feedback/BannerSummary'

const Feedback = () => {
  return (
    <>
      <Banner>
        <BannerSummary />
      </Banner>
      <Form></Form>
    </>
  )
}

export default Feedback
