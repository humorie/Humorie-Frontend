import { useEffect, useRef, useState } from 'react'

const Table = () => {
  const [activeMainTab, setActiveMainTab] = useState<string>('개인') // 개인 탭이 기본으로 선택되도록 설정
  const [activeSubTab, setActiveSubTab] = useState<string>('개인 문제') // 개인 문제 탭이 기본으로 선택되도록 설정
  const overflowRef = useRef<HTMLDivElement>(null)
  const mainTabs = ['개인', '가족']
  const privatetabs = ['개인 문제']
  const privatesymptoms = [
    '정신건강',
    '우울',
    '자살',
    '성격',
    '대인관계',
    '사회부적응',
    '외상후 스트레스',
    '인터넷 중독',
    '기타 중독',
  ]
  const familytabs = ['가족 문제', '부부 문제', '자녀 문제']
  const couplesymptoms = [
    '부부관계갈등',
    '의사소통',
    '성격차이',
    '가치관갈등',
    '종교갈등',
    '별거',
    '재혼',
    '사별',
    '배우자 외도',
    '배우자 의심',
    '배우자 폭력',
    '중독',
    '가출/행방불명',
    '법률문제',
    '경제문제',
    '부부성생활',
    '출산/낙태/불임/입양',
  ]
  const familysymptoms = [
    '원가족갈등',
    '친지갈등',
    '부양/간병갈등',
    '세대차이',
    '역할분담/기대',
    '종교차이',
    '가족죽음',
    '기타',
  ]
  const childsymptoms = [
    '부모-자녀 갈등',
    '자녀 간 갈등',
    '자녀 양육',
    '자녀 성격',
    '주의력결핍/과잉행동장애',
    '학업/진로',
    '일탈 및 비행',
    '대인관계',
    '이성교제',
    '학교폭력',
    '정신건강',
    '자녀성',
    '자녀학대',
    '자녀패륜',
    '기타',
  ]

  // 메인 탭을 클릭할 때 실행되는 함수
  const handleMainTabClick = (tab: string) => {
    setActiveMainTab(tab)
    // 개인 탭을 클릭한 경우 개인 문제 서브 탭을 기본으로 설정
    if (tab === '개인') {
      setActiveSubTab('개인 문제')
    }

    if (tab === '가족') {
      setActiveSubTab('가족 문제')
    }
  }

  // 서브 탭을 클릭할 때 실행되는 함수
  const handleSubTabClick = (tab: string) => {
    setActiveSubTab(tab)
  }

  useEffect(() => {
    // 컴포넌트가 렌더링될 때 스크롤 위치를 맨 위로 설정
    if (overflowRef.current) {
      overflowRef.current.scrollTop = 0
    }
  }, [activeSubTab]) // activeSubTab 상태가 변경될 때마다 실행

  return (
    <div>
      <table className="w-[540px] border-collapse border border-gray-300 bg-white">
        <thead>
          <tr>
            <th className="bodylmedium w-[111px] border-b-[1px] border-t-[1px] border-gray-300 py-[14px] text-gray-400">
              분류
            </th>
            <th className="bodylmedium w-[111px] border border-gray-300 py-[14px] text-gray-400">
              문제 영역
            </th>
            <th className="bodylmedium w-[318px] border-b-[1px] border-t-[1px] border-gray-300  py-[14px] text-gray-400">
              증상, 상황
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=" p-0 align-top">
              {mainTabs.map((tab, index) => (
                <div
                  key={index}
                  className={`bodylmedium  flex h-[58px] w-[110px] cursor-pointer items-center justify-center border-b-[1px] border-gray-200 bg-gray-100  text-center text-gray-400 ${activeMainTab === tab ? ' bg-primary-500 text-gray-50' : ''}`}
                  onClick={() => handleMainTabClick(tab)}>
                  {tab}
                </div>
              ))}
            </td>

            <td className="h-[300px] border border-gray-300 p-0 align-top">
              {activeMainTab === '개인' && (
                <table className=" w-full ">
                  <thead>
                    <tr>
                      {privatetabs.map((tab, index) => (
                        <td
                          key={index}
                          className={`bodylmedium h-[58px] w-[110px] cursor-pointer border-b-[1px] border-gray-200 bg-gray-100 text-center  text-gray-400 ${activeSubTab === tab ? 'bg-primary-500 text-gray-50' : ''}`}
                          onClick={() => handleSubTabClick(tab)}>
                          {tab}
                        </td>
                      ))}
                    </tr>
                  </thead>
                </table>
              )}
              {activeMainTab === '가족' && (
                <table className=" w-full ">
                  <thead>
                    <tr>
                      <td className=" p-0 align-top">
                        {familytabs.map((tab, index) => (
                          <div
                            key={index}
                            className={`bodylmedium flex h-[58px] w-[110px] cursor-pointer items-center justify-center border-b-[1px] border-gray-200 bg-gray-100  text-gray-400 ${activeSubTab === tab ? 'bg-primary-500 text-gray-50' : ''}`}
                            onClick={() => handleSubTabClick(tab)}>
                            {tab}
                          </div>
                        ))}
                      </td>
                    </tr>
                  </thead>
                </table>
              )}
            </td>
            <td>
              <div className=" h-[300px]  overflow-y-auto  text-gray-500" ref={overflowRef}>
                {activeSubTab === '개인 문제' &&
                  privatesymptoms.map((symptom, index) => (
                    <div
                      key={index}
                      className="bodylmedium rounded-0 flex h-[58px] items-center border-b-[1px] border-gray-300 bg-white px-[20px]">
                      {symptom}
                    </div>
                  ))}
                {activeSubTab === '가족 문제' &&
                  familysymptoms.map((symptom, index) => (
                    <div
                      key={index}
                      className="bodylmedium rounded-0 flex h-[58px] items-center border-b-[1px] border-gray-300 bg-white px-[20px] ">
                      {symptom}
                    </div>
                  ))}
                {activeSubTab === '부부 문제' &&
                  couplesymptoms.map((symptom, index) => (
                    <div
                      key={index}
                      className="bodylmedium rounded-0 flex h-[58px] items-center border-b-[1px] border-gray-300 bg-white px-[20px] ">
                      {symptom}
                    </div>
                  ))}
                {activeSubTab === '자녀 문제' &&
                  childsymptoms.map((symptom, index) => (
                    <div
                      key={index}
                      className="bodylmedium rounded-0 flex h-[58px] items-center border-b-[1px] border-gray-300 bg-white px-[20px] ">
                      {symptom}
                    </div>
                  ))}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
