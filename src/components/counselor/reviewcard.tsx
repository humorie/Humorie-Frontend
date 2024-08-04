import '../../index.css'

interface Review {
  content: string
  rating: number
  createdAt: string
}

interface ReviewCardProps {
  review: Review
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="flex h-[207px] w-[303px] flex-col justify-between rounded-[15px] bg-gray-100 px-[18px] py-[20px]">
      <div className="flex flex-row items-center">
        <img
          src="/src/assets/images/counseling/star_rate.svg"
          alt="rate"
          className="h-[22px] w-[22px]"
        />
        <div className="w-[9px]" />
        <p className="bodymdmedium">{review.rating.toFixed(2)}</p>
        <div className="w-[17px]" />
        <div className="bodyxsbold items-center justify-center bg-gray-500 px-[5px] text-white">
          Best
        </div>
      </div>
      <p className="bodymdregular text-gray-700">{review.content}</p>
      <div className="flex flex-row justify-between text-gray-500">
        <p className="bodysmregular">{new Date(review.createdAt).toLocaleDateString()}</p>
        <p className="bodysmregular">엔데이 프리미엄 구매</p>
      </div>
    </div>
  )
}

export default ReviewCard
