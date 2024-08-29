import Footer from '../components/Footer'
import Header from '../components/header/Header'
import Container1 from '../components/main/Container1'
import Container2 from '../components/main/Container2'
import Container3 from '../components/main/Container3'

const Main: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <Header />
      <Container1 />
      <Container2 />
      <Container3 />
      <Footer />
    </div>
  )
}

export default Main
