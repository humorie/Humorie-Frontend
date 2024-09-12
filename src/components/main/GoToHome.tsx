import { useNavigate } from 'react-router-dom'
import Button from '../Button'
import Header from '../header/Header'
import Footer from '../Footer'

const GoToHome: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <div className="flex h-[700px] w-full flex-col items-center justify-center px-[170px] pb-[370px] pt-[128px]">
        <div className="mdbold mb-[16px] flex flex-row items-center justify-center gap-2 self-stretch text-gray-700">
          <div>🏗️</div>이 페이지는 공사중입니다.
        </div>
        <div className="bodysmmedium mb-[50px] flex flex-col items-center justify-center text-gray-400">
          <p>엔데이는 더 편리한 서비스를 제공해 드리기 위해</p>
          <p>최선을 다하고 있어요.</p>
        </div>
        <Button label="홈으로 돌아가기" color="pink" size="XLarge" onClick={() => navigate('/')} />
      </div>
      <Footer />
    </>
  )
}

export default GoToHome
