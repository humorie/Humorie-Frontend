import '../../../index.css'

interface Review {
  content: string
  rating: number
  recommendationCount: number
  createdAt: string
}

interface ReviewCardProps {
  review: Review
}

const Reviewscard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="flex h-[249px] w-[1060px] flex-col justify-between rounded-[10px] bg-white px-[27px] py-[24px] drop-shadow-[0_0_7px_rgba(0,0,0,0.08)]">
      <div className="flex flex-row items-center">
        <img
          src="/src/assets/images/counseling/star_rate.svg"
          alt="rate"
          className="h-[22px] w-[22px]"
        />
        <div className="w-[12px]" />
        <p className="bodymdmedium">{review.rating.toFixed(1)}</p>
      </div>
      <p className="bodymdregular text-gray-700">{review.content}</p>
      <div className="flex flex-row justify-between text-gray-500">
        <p className="bodysmregular">{new Date(review.createdAt).toLocaleDateString()}</p>
        <p className="bodysmregular">엔데이 프리미엄 구매</p>
      </div>
    </div>
  )
}

export default Reviewscard
