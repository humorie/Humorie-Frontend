import '../../../index.css'
import Stresscard from './reviews_reviewcard_stress'

const ReviewsStress = () => {
  return (
    <div className="flex flex-col w-[1060px]">
      <p className="bodysmsemibold mb-[26px]">카테고리별</p>
      <div className="space-y-[62px]">
        <Stresscard />
        <Stresscard />
        <Stresscard />
        <Stresscard />
        <Stresscard />
      </div>
    </div>
  )
}

export default ReviewsStress
