// 상담 상세 정보 인터페이스
export interface ConsultDetail {
  id: number
  counselorName: string
  content: string
  status: boolean
  symptom: string
  title: string
  counselDate: string
  counselTime: string
  location: string
}

// 상담 내역 인터페이스
export interface HistoryProps {
  consultDetail: ConsultDetail
  accountName: string
}

// 상담사 정보 인터페이스
export interface CounselorTypes {
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
  reviews: Review[]
}

// 리뷰 인터페이스
export interface Review {
  reviewId: number
  title: string
  content: string
  rating: number
  createdAt: string
}

export interface ResvationTypes {
  counselorId: string // 상담사 id
}
