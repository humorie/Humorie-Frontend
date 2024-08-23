import { useState, useEffect } from 'react'
import CompleteModal from '../components/reservation/CompleteModal'
import { useModalStore } from '../store/store'
import axios from 'axios'

interface PaymentRequest {
  reservationUid: string // 상담예약 id
}
interface ReservationProps {
  reservationUid: string // 상담예약 id
  counselorName: string // 상담사 이름
  finalPrice: number // 결제금액
  accountName: string // 구매자 이름
  accountEmail: string // 구매자 이메일
}

const PortOneApi: React.FC<PaymentRequest> = ({ reservationUid }) => {
  const [reservationInfo, setReservationInfo] = useState<ReservationProps>() // 상담예약 response값 상태관리
  const { modalOpen, openModal } = useModalStore() // complete 모달창 store

  // 상담예약 조회 API
  useEffect(() => {
    if (reservationUid) {
      axios
        .get(`/api/reservation/get`, {
          params: { reservationUid }, // 쿼리 파라미터로 reservationUid 전달
        })
        .then((response) => {
          if (response.data.isSuccess) {
            console.log('상담예약 결제 전 조회 API: ', response.data)
            setReservationInfo(response.data.result)
          }
        })
        .catch((error) => {
          console.log('API 요청 에러: ', error)
        })
    }
  }, [reservationUid])

  // 포트원 API 요청
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.iamport.kr/v1/iamport.js'
    script.async = true

    script.onload = () => {
      // 스크립트가 로드된 후 iamport 관련 코드를 실행
      const { IMP } = window
      IMP.init('imp43382501') // 매장코드
      requestPay() //결제 요청
    }
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [reservationInfo])

  // 포트원 결제 요청 함수
  const requestPay = () => {
    const { IMP } = window
    if (!reservationInfo) return

    IMP.request_pay(
      {
        pg: 'tosspayments',
        pay_method: 'card',
        merchant_uid: reservationInfo.reservationUid,
        name: `${reservationInfo.counselorName} 상담사 예약`,
        amount: reservationInfo.finalPrice,
        buyer_email: reservationInfo.accountEmail,
        buyer_name: reservationInfo.accountName,
      },
      async (rsp: any) => {
        try {
          const response = await axios.post('/api/payment', {
            payment_uid: rsp.imp_uid, // 결제 고유번호
            reservation_uid: rsp.merchant_uid, // 주문번호
          })
          console.log('결제 검증 API 결과: ', response.data)
          openModal()
        } catch (error) {
          console.error('결제 검증 API 에러:', error)
        }
      },
    )
  }

  return <>{modalOpen ? <CompleteModal /> : null}</>
}

export default PortOneApi
