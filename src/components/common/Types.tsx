// 전체 상담사 인터페이스
export interface CounselorsType {
  counselorId: number
  name: string
  gender: string
  region: string
  rating: number
  reviewCount: number
  introduction: string
  counselingMethods: string[]
  symptoms: string[]
}

// 상담사 정보 인터페이스
export interface CounselorType {
  counselorId: number
  name: string
  phoneNumber: string
  email: string
  qualification: string
  rating: number
  counselingCount: number
  reviewCount: number
  introduction: string
  affiliations: string[]
  educations: string[]
  careers: string[]
  symptoms: string[]
  reviews: ReviewType[]
}

// 리뷰 인터페이스
export interface ReviewType {
  reviewId: string
  title: string
  content: string
  rating: number
  createdAt: string
}

// 유저 정보 인터페이스
export interface UserType {
  id: number
  email: string
  accountName: string
  name: string
  emailSubscription: boolean
}

// 상담예약 페이지 인터페이스
export interface ResvationType {
  counselorId: number // 상담사 id
}

// 전체 상담 내역 디테일 타입 인터페이스
export interface AllHistoryDetailTypes {
  id: string
  status?: boolean
  counselorName?: string
  counselContent?: string
  location?: string
  counselDate?: string
}

// 전체 상담내역 타입 인터페이스
export interface AllHistoryTypes {
  consultDetails: AllHistoryDetailTypes[]
  pageNumber?: number
  pageSize?: number
  totalElements: number
  totalPages?: number
}

// 특정 상담내역 디테일 인터페이스
export interface PostDetailTypes {
  id: string // 게시글 id
  counslorId: string // 필요함
  counselorName: string
  content: string
  status: boolean
  symptom: string
  title: string
  counselDate: string
  counselTime: string
  location: string
}
