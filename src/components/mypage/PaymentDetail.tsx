import React, { useState, useEffect } from 'react'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const PaymentDetail: React.FC = () => {
  const navigate = useNavigate()
  const [paymentData, setPaymentData] = useState<any[]>([])
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked) // 체크 상태를 토글
  }

  // 결제내역조회 api
  useEffect(() => {
    const fetchPaymentData = async () => {
      try {
        const token = localStorage.getItem('accessToken')
        const response = await axios.get('/api/payment/get', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.data.isSuccess) {
          setPaymentData(response.data.result)
        } else {
          console.log('결제 내역 조회에 실패했습니다.')
        }
      } catch (err) {
        console.log('API 요청에 실패했습니다.')
      }
    }

    fetchPaymentData()
  }, [])

  // 총 결제 금액 계산
  const totalAmount = paymentData.reduce((total, item) => total + item.price, 0)

  // 회원 탈퇴하기 버튼
  const handleDeleteAccountButtonClick = () => {
    navigate('/deleteaccount')
  }

  return (
    <div className="mb-[198px] mt-[150px] flex h-auto w-full flex-col items-center">
      <div className="bodylsemibold inline-block w-[312px] text-center text-gray-900">
        결제 내역
      </div>
      <div className="left-[110px] top-[1740px] mt-[40px] box-border flex w-[880px] flex-col items-start justify-center gap-[8px] border-[1px] border-gray-200 bg-gray-100 p-6 text-left text-black">
        <div className="bodymdsemibold relative inline-block w-[137px]">총 결제 금액</div>
        <div className="flex flex-row items-center justify-center gap-[3px] text-right">
          <div className="mdbold relative">{totalAmount.toLocaleString()}</div>
          <div className="xssemibold relative text-gray-600">원</div>
        </div>
      </div>

      <div className="bodymdmedium left-[110px] top-[1892px] mt-[24px] flex flex-col items-start justify-start border-[1px] border-gray-200 bg-white text-gray-600">
        <div className="box-border flex h-[78px] w-[880px] flex-row items-center justify-start gap-[16px] border-b border-gray-200 bg-gray-600 p-6 text-white">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="mt-0.5 h-[20px] w-[20px] appearance-none border-2 border-white 
                  bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
          />
          {isChecked ? (
            <div className="relative flex w-[84px] shrink-0 items-center justify-start">
              <img
                src="src/assets/images/mypage/trash.svg"
                alt="Trash Icon"
                className="mt-0.5 h-[24px] w-[24px]"
              />
            </div>
          ) : (
            <div className="relative flex w-[84px] shrink-0 items-center justify-center">날짜</div>
          )}
          <div className={`relative flex-1 text-center ${isChecked ? 'hidden' : ''}`}>항목</div>
          <div
            className={`relative flex w-14 shrink-0 items-center justify-center ${isChecked ? 'hidden' : ''}`}>
            결제수단
          </div>
          <div
            className={`relative flex w-14 shrink-0 items-center justify-center ${isChecked ? 'hidden' : ''}`}>
            상태
          </div>
          <div
            className={`flex w-[77px] flex-row items-center justify-center text-right ${isChecked ? 'hidden' : ''}`}>
            <div className="relative">금액</div>
          </div>
        </div>
        {paymentData.map((payment) => (
          <div
            key={payment.reservationUid}
            className="box-border flex h-[78px] w-[880px] flex-row items-center justify-start gap-[16px] border-b border-gray-200 p-6">
            <input
              type="checkbox"
              checked={isChecked}
              className="caret-color:primary-700 mt-0.5 h-[20px] w-[20px] appearance-none border-2 border-gray-400 
                    bg-white bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
            />
            <div className="bodysmmedium relative flex w-[84px] shrink-0 items-center text-left">
              {new Date(payment.approvedAt).toLocaleDateString()}
            </div>
            <div className="relative flex w-[459px] items-center justify-center text-gray-900">
              {payment.reservationUid}
            </div>
            <div className="relative flex w-14 shrink-0 items-center justify-center">
              {payment.paymentMethod}
            </div>
            <div className="relative flex w-14 shrink-0 items-center justify-center">
              {payment.paymentStatus}
            </div>
            <div className="bodymdsemibold flex w-[77px] flex-row items-center justify-center gap-[1px] text-right text-gray-900">
              <div className="relative">{payment.price.toLocaleString()}</div>
              <div className="bodysmsemibold relative text-gray-600">원</div>
            </div>
          </div>
        ))}
      </div>

      <div className="left-[394px] top-[2276px] mt-[150px] flex h-12 w-[312px] flex-row items-center justify-center rounded-md bg-gray-200 text-gray-500">
        <Button
          label="회원 탈퇴하기"
          size="XLarge"
          color="gray"
          onClick={handleDeleteAccountButtonClick}
        />
      </div>
    </div>
  )
}

export default PaymentDetail
