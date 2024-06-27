import Notice from './Notice'

const Contents2: React.FC = () => {
  return (
    <div className="relative h-[960px] w-[1440px]">
      <img className="" src="src/assets/images/main/main_contents2_image1.svg" alt="배경화면"></img>
      <div className="absolute left-[190px] top-[548px] ">
        <Notice />
      </div>
    </div>
  )
}

export default Contents2
