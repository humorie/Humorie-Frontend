import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../Button'
import Input from '../Input'
import { useNavigate } from 'react-router-dom'

const TotalPoints: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>('전체') // '전체' 버튼 활성화
  const [pointsData, setPointsData] = useState<any[]>([]) //전체포인트조회
  const [earnedPointsData, setEarnedPointsData] = useState<any[]>([]) // 적립포인트조회
  const [spentPointsData, setSpentPointsData] = useState<any[]>([]) // 사용 포인트 조회

  //전체포인트내역조회 api
  useEffect(() => {
    const fetchPoints = async () => {
      try {
        const token = localStorage.getItem('accessToken')
        const response = await axios.get('/api/points/all', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.data.isSuccess) {
          setPointsData(response.data.result)
        } else {
          console.log('포인트 내역 조회에 실패했습니다.')
        }
      } catch (err) {
        console.log('API 요청에 실패했습니다.')
      }
    }

    fetchPoints()
  }, [])

  //적립포인트내역조회 api
  useEffect(() => {
    const fetchEarnedPoints = async () => {
      try {
        const token = localStorage.getItem('accessToken')
        const response = await axios.get('/api/points/earned', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.data.isSuccess) {
          setEarnedPointsData(response.data.result)
        } else {
          console.log('적립 포인트 내역 조회에 실패했습니다.')
        }
      } catch (err) {
        console.log('API 요청에 실패했습니다.')
      }
    }

    if (activeButton === '적립') {
      fetchEarnedPoints()
    }
  }, [activeButton])

  // 사용 포인트 내역 조회 API
  useEffect(() => {
    const fetchSpentPoints = async () => {
      try {
        const token = localStorage.getItem('accessToken')
        const response = await axios.get('/api/points/spent', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.data.isSuccess) {
          setSpentPointsData(response.data.result)
        } else {
          console.log('사용 포인트 내역 조회에 실패했습니다.')
        }
      } catch (err) {
        console.log('API 요청에 실패했습니다.')
      }
    }

    if (activeButton === '사용') {
      fetchSpentPoints()
    }
  }, [activeButton])

  return (
    <div className="flex h-auto w-full flex-col items-center">
      <div className="mt-[324px] flex w-[880px] flex-row items-start justify-start gap-[16px] text-gray-500">
        <button
          onClick={() => setActiveButton('전체')}
          className={`bodymdmedium flex flex-row items-start justify-start rounded px-4 py-2 focus:font-semibold ${
            activeButton === '전체'
              ? 'bg-primary-100 text-primary-800'
              : 'bg-gray-100 text-gray-500'
          }`}>
          <div className="relative">전체</div>
        </button>
        <button
          onClick={() => setActiveButton('적립')}
          className={`bodymdmedium flex flex-row items-start justify-start rounded px-4 py-2 focus:font-semibold ${
            activeButton === '적립'
              ? 'bg-primary-100 text-primary-800'
              : 'bg-gray-100 text-gray-500'
          }`}>
          <div className="relative">적립</div>
        </button>
        <button
          onClick={() => setActiveButton('사용')}
          className={`bodymdmedium flex flex-row items-start justify-start rounded px-4 py-2 focus:font-semibold ${
            activeButton === '사용'
              ? 'bg-primary-100 text-primary-800'
              : 'bg-gray-100 text-gray-500'
          }`}>
          <div className="relative">사용</div>
        </button>
      </div>

      {activeButton === '전체' && (
        <>
          <div className="mt-[24px] box-border flex h-[78px] w-[880px] flex-row items-center justify-center gap-[16px] border-b border-gray-200 bg-primary-600 p-6 text-white">
            <input
              type="checkbox"
              className="mt-0.5 h-[20px] w-[20px] appearance-none border-2 border-white 
                    bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
            />
            <div className="relative flex w-[84px] shrink-0 items-center justify-center">날짜</div>
            <div className="relative flex-1 text-center">항목</div>
            <div className="flex w-[83px] flex-row items-center justify-center text-right">
              <div className="relative">적립포인트</div>
            </div>
            <div className="flex w-[83px] flex-row items-center justify-center text-right">
              <div className="relative">사용포인트</div>
            </div>
          </div>
          {pointsData.map((point) => (
            <div
              key={point.pointId}
              className="box-border flex h-[78px] w-[880px] flex-row items-center justify-center gap-[16px] border-b border-l border-r border-gray-200 p-6">
              <input
                type="checkbox"
                className="caret-color:primary-700 mt-0.5 h-[20px] w-[20px] appearance-none border-2 border-gray-400 
                      bg-white bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
              />
              <div className="white-space:nowrap bodysmmedium relative flex h-[20px] w-[84px] shrink-0 items-center justify-center text-gray-600">
                {new Date(point.transactionDate).toLocaleDateString()}
              </div>
              <div className="bodymdmedium relative flex-1 text-center text-gray-900">
                {point.title}
              </div>
              <div className="flex w-[83px] flex-row items-center justify-center gap-[1px] text-right text-gray-900 ">
                {point.earnedPoints > 0 && (
                  <>
                    <div className="bodysmsemibold relative">+</div>
                    <div className="bodymdsemibold relative">
                      {point.earnedPoints.toLocaleString()}
                    </div>
                    <div className="bodysmsemibold relative text-gray-600">P</div>
                  </>
                )}
              </div>
              <div className="flex w-[83px] flex-row items-center justify-center gap-[1px] text-right text-gray-900">
                {point.spentPoints > 0 && (
                  <>
                    <div className="bodysmsemibold relative">
                      {point.spentPoints > 0 ? '-' : ''}
                    </div>
                    <div className="bodymdsemibold relative">
                      {point.spentPoints > 0 ? point.spentPoints.toLocaleString() : ''}
                    </div>
                    <div className="bodysmsemibold relative text-gray-600">P</div>
                  </>
                )}
              </div>
            </div>
          ))}
        </>
      )}

      {activeButton === '적립' && (
        <>
          <div className="mt-[24px] box-border flex h-[78px] w-[880px] flex-row items-center justify-center gap-[16px] border-b border-gray-200 bg-primary-600 p-6 text-white">
            <input
              type="checkbox"
              className="mt-0.5 h-[20px] w-[20px] appearance-none border-2 border-white bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
            />
            <div className="relative flex w-[84px] shrink-0 items-center justify-center">날짜</div>
            <div className="relative flex-1 text-center">항목</div>
            <div className="flex w-[83px] flex-row items-center justify-center text-right">
              <div className="relative">적립 포인트</div>
            </div>
          </div>
          {earnedPointsData.map((point) => (
            <div
              key={point.pointId}
              className="box-border flex h-[78px] w-[880px] flex-row items-center justify-center gap-[16px] border-b border-l border-r border-gray-200 p-6">
              <input
                type="checkbox"
                className="mt-0.5 h-[20px] w-[20px] appearance-none border-2 border-gray-400 bg-white bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
              />
              <div className="white-space:nowrap bodysmmedium relative flex h-[20px] w-[84px] shrink-0 items-center justify-center text-gray-600">
                {new Date(point.transactionDate).toLocaleDateString()}
              </div>
              <div className="bodymdmedium relative flex-1 text-center text-gray-900">
                {point.title}
              </div>
              <div className="flex w-[83px] flex-row items-center justify-center gap-[1px] text-right text-gray-900">
                {point.earnedPoints > 0 && (
                  <>
                    <div className="bodysmsemibold relative">+</div>
                    <div className="bodymdsemibold relative">
                      {point.earnedPoints.toLocaleString()}
                    </div>
                    <div className="bodysmsemibold relative text-gray-600">P</div>
                  </>
                )}
              </div>
            </div>
          ))}
        </>
      )}

      {activeButton === '사용' && (
        <>
          <div className="mt-[24px] box-border flex h-[78px] w-[880px] flex-row items-center justify-center gap-[16px] border-b border-gray-200 bg-primary-600 p-6 text-white">
            <input
              type="checkbox"
              className="mt-0.5 h-[20px] w-[20px] appearance-none border-2 border-white bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
            />
            <div className="relative flex w-[84px] shrink-0 items-center justify-center">날짜</div>
            <div className="relative flex-1 text-center">항목</div>
            <div className="flex w-[83px] flex-row items-center justify-center text-right">
              <div className="relative">사용 포인트</div>
            </div>
          </div>
          {spentPointsData.map((point) => (
            <div
              key={point.pointId}
              className="box-border flex h-[78px] w-[880px] flex-row items-center justify-center gap-[16px] border-b border-l border-r border-gray-200 p-6">
              <input
                type="checkbox"
                className="mt-0.5 h-[20px] w-[20px] appearance-none border-2 border-gray-400 bg-white bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
              />
              <div className="white-space:nowrap bodysmmedium relative flex h-[20px] w-[84px] shrink-0 items-center justify-center text-gray-600">
                {new Date(point.transactionDate).toLocaleDateString()}
              </div>
              <div className="bodymdmedium relative flex-1 text-center text-gray-900">
                {point.title}
              </div>
              <div className="flex w-[83px] flex-row items-center justify-center gap-[1px] text-right text-gray-900">
                {point.spentPoints > 0 && (
                  <>
                    <div className="bodysmsemibold relative">
                      {point.spentPoints > 0 ? '-' : ''}
                    </div>
                    <div className="bodymdsemibold relative">
                      {point.spentPoints > 0 ? point.spentPoints.toLocaleString() : ''}
                    </div>
                    <div className="bodysmsemibold relative text-gray-600">P</div>
                  </>
                )}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default TotalPoints
