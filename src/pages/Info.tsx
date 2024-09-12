import Footer from '../components/Footer'
import Header from '../components/header/Header'
import Container4 from '../components/info/Container4'
import Container1 from '../components/info/Container1'
import Container2 from '../components/info/Container2'
import Container3 from '../components/info/Container3'

const Info: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Footer />
    </div>
  )
}
export default Info
