import Footer from '../components/Footer'
import Header from '../components/header/Header'
import Contents from '../components/history/post/Contents.tsx'
import { useParams } from 'react-router-dom'
// 전체 상당 내역 개시글
const Post: React.FC = () => {
  const { id } = useParams()

  if (!id) {
    return <div>Error: Post ID is missing</div>
  }

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <Header />
      <Contents id={id} />
      <Footer />
    </div>
  )
}

export default Post
