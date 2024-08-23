// import { useState, useEffect } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import EmptyPost from './EmptyPost'
// import Pagination from '../Pagenation'
// import axios from 'axios'
// import { ConsulTypes } from '../Types'
// import RecentPost from './RecentPost'

// const Posts: React.FC = () => {
//   const [counselList, setCounselList] = useState<ConsulTypes>() // 전체 상담 목록 상태관리
//   const { id } = useParams() // 상담 내역 게시글 id
//   const navigate = useNavigate()
//   // 페이지네이션 상태
//   const [currentPage, setCurrentPage] = useState<number>(1)
//   // const postsPerPage = 9
//   // const totalPages = Math.ceil(posts.length / postsPerPage)

//   // const getCurrentPosts = (): Post[] => {
//   //   const startIndex = (currentPage - 1) * postsPerPage
//   //   const endIndex = startIndex + postsPerPage
//   //   return posts.slice(startIndex, endIndex)
//   // }

//   // const handlePageClick = (pageNumber: number) => {
//   //   setCurrentPage(pageNumber)
//   // }
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const accessToken = localStorage.getItem('accessToken')
//         const response = await axios.get('/api/consult-detail/list', {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//           params: {
//             page: 1,
//             size: 9,
//           },
//         })
//         setCounselList(response.data)
//         console.log('전체 상담 내역 조회 API 결과: ', response.data)
//       } catch (error) {
//         console.log('전체 상담 내역 조회 API 에러: ', error)
//       }
//     }
//     fetchData()
//   }, [])

//   if (!counselList) {
//     return <div>전체 상담 내역 API 조회 에러</div>
//   }

//   return (
//     <div className="flex w-[1060px] flex-col bg-white text-black">
//       {counselList.totalElements > 0 ? (
//         <div>
//           {/* 최근 상담 목록 */}
//           <RecentPost />

//           <div className="mb-[50px] mt-[80px] flex h-[30px] flex-col items-start justify-start">
//             <p className="xsbold text-center">상담 내역</p>
//           </div>

//           {/* 전체 상담 목록 */}
//           <div className="bodymdmedium flex h-[78px] w-full flex-row items-center justify-evenly gap-[100px] bg-neutral-100 text-center text-stone-500">
//             <p className="w-[100px]">담당자명</p>
//             <p className="w-[100px]">상담상태</p>
//             <p className="w-[100px]">상담내용</p>
//             <p className="w-[100px]">상담방법</p>
//             <p className="w-[100px]">상담일</p>
//           </div>

//           {counselList.consultDetails.map((post) => (
//             <div
//               key={post.id}
//               className="bodysmmedium flex w-full cursor-pointer flex-row items-center justify-evenly gap-[100px] py-[60px] text-center text-stone-500"
//               onClick={() => navigate(`/history/${id}`)}>
//               <p className="w-[100px]">{post.counselorName}</p>
//               <p className="w-[100px]">{post.status}</p>
//               <p className="w-[100px]">{post.counselContent}</p>
//               <p className="w-[100px]">{post.location}</p>
//               <p className="w-[100px]">{post.counselDate}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <EmptyPost />
//       )}
//     </div>
//   )
// }

// export default Posts
