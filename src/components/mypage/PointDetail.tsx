import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PointDetail: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>('전체') // '전체' 버튼 활성화
  const [totalPoints, setTotalPoints] = useState(0) // 보유 포인트 조회
  const [pointsHistory, setPointsHistory] = useState<any[]>([]) //전체 포인트 내역 조회
  const [savePoints, setSavePoints] = useState<any[]>([]) // 적립 포인트 내역 조회
  const [spendPoints, setSpendPoints] = useState<any[]>([]) // 사용 포인트 내역 조회

  const token = localStorage.getItem('accessToken')

  // 보유 포인트 조회
  useEffect(() => {
    const fetchPoints = async () => {
      try {
        const response = await axios.get('/api/points/total', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        if (response.data.isSuccess) {
          setTotalPoints(response.data.result.totalPoints || 0)
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          const { code, message } = error.response.data
          // 토큰 정보와 일치하는 사용자가 존재하지 않는 경우
          if (code == 2003) {
            console.log(message)
          }
        }
      }
    }
    fetchPoints()
  }, [])

  // 전체 포인트 내역 조회
  useEffect(() => {
    const fetchPoints = async () => {
      try {
        const response = await axios.get('/api/points/all', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        if (response.data.isSuccess) {
          setPointsHistory(response.data.result)
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          const { code, message } = error.response.data
          // 토큰 정보와 일치하는 사용자가 존재하지 않는 경우
          if (code == 2003) {
            console.log(message)
          }
        }
      }
    }
    fetchPoints()
  }, [])

  // 적립 포인트 내역 조회
  useEffect(() => {
    const fetchEarnedPoints = async () => {
      try {
        const response = await axios.get('/api/points/earned', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.data.isSuccess) {
          setSavePoints(response.data.result)
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          const { code, message } = error.response.data
          // 토큰 정보와 일치하는 사용자가 존재하지 않는 경우
          if (code == 2003) {
            console.log(message)
          }
        }
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
        const response = await axios.get('/api/points/spent', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.data.isSuccess) {
          setSpendPoints(response.data.result)
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          const { code, message } = error.response.data
          // 토큰 정보와 일치하는 사용자가 존재하지 않는 경우
          if (code == 2003) {
            console.log(message)
          }
        }
      }
    }

    if (activeButton === '사용') {
      fetchSpentPoints()
    }
  }, [activeButton])

  return (
    <div className="bg-gray- flex w-[1100px] flex-col items-center justify-center pt-[60px] text-center text-gray-900">
      {/* 보유 포인트 */}
      <div className="bodylsemibold mb-[40px]">포인트 내역</div>
      <div className="mb-[60px] box-border flex w-[880px] flex-col items-start justify-center gap-[8px] border-[1px] border-gray-200 bg-gray-100 p-6">
        <div className="bodymdsemibold  text-black">보유 포인트</div>
        <div className="flex flex-row items-center justify-center gap-[3px] text-right">
          <div className="mdbold text-gray-900">{totalPoints}</div>
          <div className="xssemibold text-gray-600">P</div>
        </div>
      </div>
      {/* 전체, 적립, 사용 버튼 */}
      <div className="flex w-[880px] flex-row items-start justify-start gap-[16px] text-gray-500">
        <button
          onClick={() => setActiveButton('전체')}
          className={`bodymdmedium flex flex-row items-start justify-start rounded px-4 py-2 focus:font-semibold ${
            activeButton === '전체'
              ? 'bg-primary-100 text-primary-800'
              : 'bg-gray-100 text-gray-500'
          }`}>
          <div className="">전체</div>
        </button>
        <button
          onClick={() => setActiveButton('적립')}
          className={`bodymdmedium flex flex-row items-start justify-start rounded px-4 py-2 focus:font-semibold ${
            activeButton === '적립'
              ? 'bg-primary-100 text-primary-800'
              : 'bg-gray-100 text-gray-500'
          }`}>
          <div className="">적립</div>
        </button>
        <button
          onClick={() => setActiveButton('사용')}
          className={`bodymdmedium flex flex-row items-start justify-start rounded px-4 py-2 focus:font-semibold ${
            activeButton === '사용'
              ? 'bg-primary-100 text-primary-800'
              : 'bg-gray-100 text-gray-500'
          }`}>
          <div className="">사용</div>
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
            <div className=" flex w-[84px] shrink-0 items-center justify-center">날짜</div>
            <div className=" flex-1 text-center">항목</div>
            <div className="flex w-[83px] flex-row items-center justify-center text-right">
              <div className="">적립포인트</div>
            </div>
            <div className="flex w-[83px] flex-row items-center justify-center text-right">
              <div className="">사용포인트</div>
            </div>
          </div>
          {pointsHistory.map((point) => (
            <div
              key={point.pointId}
              className="box-border flex h-[78px] w-[880px] flex-row items-center justify-center gap-[16px] border-b border-l border-r border-gray-200 bg-white p-6">
              <input
                type="checkbox"
                className="caret-color:primary-700 mt-0.5 h-[20px] w-[20px] appearance-none border-2 border-gray-400 
                      bg-white bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
              />
              <div className="white-space:nowrap bodysmmedium  flex h-[20px] w-[84px] shrink-0 items-center justify-center text-gray-600">
                {new Date(point.transactionDate).toLocaleDateString()}
              </div>
              <div className="bodymdmedium  flex-1 text-center text-gray-900">{point.title}</div>
              <div className="flex w-[83px] flex-row items-center justify-center gap-[1px] text-right text-gray-900 ">
                {point.earnedPoints > 0 && (
                  <>
                    <div className="bodysmsemibold ">+</div>
                    <div className="bodymdsemibold ">{point.earnedPoints.toLocaleString()}</div>
                    <div className="bodysmsemibold  text-gray-600">P</div>
                  </>
                )}
              </div>
              <div className="flex w-[83px] flex-row items-center justify-center gap-[1px] text-right text-gray-900">
                {point.spentPoints > 0 && (
                  <>
                    <div className="bodysmsemibold ">{point.spentPoints > 0 ? '-' : ''}</div>
                    <div className="bodymdsemibold ">
                      {point.spentPoints > 0 ? point.spentPoints.toLocaleString() : ''}
                    </div>
                    <div className="bodysmsemibold  text-gray-600">P</div>
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
            <div className=" flex w-[84px] shrink-0 items-center justify-center">날짜</div>
            <div className=" flex-1 text-center">항목</div>
            <div className="flex w-[83px] flex-row items-center justify-center text-right">
              <div className="">적립 포인트</div>
            </div>
          </div>
          {savePoints.map((point) => (
            <div
              key={point.pointId}
              className="box-border flex h-[78px] w-[880px] flex-row items-center justify-center gap-[16px] border-b border-l border-r border-gray-200 p-6">
              <input
                type="checkbox"
                className="mt-0.5 h-[20px] w-[20px] appearance-none border-2 border-gray-400 bg-white bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
              />
              <div className="white-space:nowrap bodysmmedium  flex h-[20px] w-[84px] shrink-0 items-center justify-center text-gray-600">
                {new Date(point.transactionDate).toLocaleDateString()}
              </div>
              <div className="bodymdmedium  flex-1 text-center text-gray-900">{point.title}</div>
              <div className="flex w-[83px] flex-row items-center justify-center gap-[1px] text-right text-gray-900">
                {point.earnedPoints > 0 && (
                  <>
                    <div className="bodysmsemibold ">+</div>
                    <div className="bodymdsemibold ">{point.earnedPoints.toLocaleString()}</div>
                    <div className="bodysmsemibold  text-gray-600">P</div>
                  </>
                )}
              </div>
            </div>
          ))}
        </>
      )}

      {activeButton === '사용' &&
        (spendPoints.length > 0 ? (
          <>
            <div className="mt-[24px] box-border flex h-[78px] w-[880px] flex-row items-center justify-center gap-[16px] border-b border-gray-200 bg-primary-600 p-6 text-white">
              <input
                type="checkbox"
                className="mt-0.5 h-[20px] w-[20px] appearance-none border-2 border-white bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
              />
              <div className=" flex w-[84px] shrink-0 items-center justify-center">날짜</div>
              <div className=" flex-1 text-center">항목</div>
              <div className="flex w-[83px] flex-row items-center justify-center text-right">
                <div className="">사용 포인트</div>
              </div>
            </div>
            {spendPoints.map((point) => (
              <div
                key={point.pointId}
                className="box-border flex h-[78px] w-[880px] flex-row items-center justify-center gap-[16px] border-b border-l border-r border-gray-200 p-6">
                <input
                  type="checkbox"
                  className="mt-0.5 h-[20px] w-[20px] appearance-none border-2 border-gray-400 bg-white bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
                />
                <div className="white-space:nowrap bodysmmedium  flex h-[20px] w-[84px] shrink-0 items-center justify-center text-gray-600">
                  {new Date(point.transactionDate).toLocaleDateString()}
                </div>
                <div className="bodymdmedium  flex-1 text-center text-gray-900">{point.title}</div>
                <div className="flex w-[83px] flex-row items-center justify-center gap-[1px] text-right text-gray-900">
                  {point.spentPoints > 0 && (
                    <>
                      <div className="bodysmsemibold ">{point.spentPoints > 0 ? '-' : ''}</div>
                      <div className="bodymdsemibold ">
                        {point.spentPoints > 0 ? point.spentPoints.toLocaleString() : ''}
                      </div>
                      <div className="bodysmsemibold  text-gray-600">P</div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="mt-[24px] flex h-[128px] w-[880px] flex-col items-center justify-center border border-gray-200 bg-gray-100 p-[24px]">
            <div className="bodymdmedium text-gray-400">포인트 사용 내역이 없습니다. </div>
          </div>
        ))}
    </div>
  )
}

export default PointDetail
