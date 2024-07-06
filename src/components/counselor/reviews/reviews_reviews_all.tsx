import '../../../index.css'
import Allcard from './reviews_reviewcard_all'

const ReviewsAll = () => {
  return (
    <div className="flex flex-col w-[1060px]">
      <p className="bodysmsemibold mb-[26px]">평점 높은 순</p>
      <div className="space-y-[62px]">
        <Allcard />
        <Allcard />
        <Allcard />
        <Allcard />
        <Allcard />
      </div>
    </div>
  )
}

export default ReviewsAll
