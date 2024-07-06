// 리뷰가 등록되면 이동되는 페이지입니다.
import Header from '../components/header/Header'
import Button from '../components/Button'
import Footer from '../components/Footer'

const Complete: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <Header />
      <div className="flex w-[1060px] items-center justify-center py-[300px]">
        <div className="flex h-[200px] w-[375px] flex-col items-center justify-center bg-white">
          <div className="mdbold flex w-full items-center justify-center text-black">
            리뷰가 작성되었어요!
          </div>
          <div className="bodysmmedium mb-[47px] mt-[16px] flex w-full  items-center justify-center text-center text-gray-400">
            내담자분께서 정성스럽게 작성해주신 리뷰는
            <br /> 앤데이 상담사님에게 소중히 간직될 거에요
          </div>
          <Button
            label="돌아가기"
            size="XLarge"
            onClick={() => {
              console.log('클릭됨')
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Complete
