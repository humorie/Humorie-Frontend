import Button from '../Button'
import { useNavigate } from 'react-router-dom'
import Input from '../Input'

const MemberInfo: React.FC = () => {
  const navigate = useNavigate()
  // 회원 탈퇴하기 버튼
  const handleDeleteAccountButtonClick = () => {
    navigate('/deleteaccount')
  }

  //
  return (
    <div className="relative h-[2522px] w-[1100px] bg-gray-50 text-center text-gray-900">
      {/* 회원정보 */}
      <div className="bodylsemibold absolute left-[394px] top-[80px] inline-block w-[312px] ">
        회원정보
      </div>
      <div className="absolute left-[110px] top-[150px] flex flex-col items-start justify-start border-[1px] border-gray-200 bg-gray-100 ">
        <div className="box-border flex h-24 w-[880px] flex-row items-center justify-start gap-[8px] border-b border-gray-200 px-12 py-6">
          <div className="flex w-[120px] flex-row items-center justify-start">
            <div className="bodymdmedium relative">아이디</div>
          </div>
          <div className="bodysmmedium relative flex w-[312px] shrink-0 items-center">nday12</div>
          <div className="bodyxsregular relative text-gray-500">아이디는 변경할 수 없습니다.</div>
        </div>
        <div className="box-border flex h-24 w-[880px] flex-row items-center justify-start gap-[8px] border-b border-gray-200 px-12 py-6">
          <div className="flex w-[120px] flex-row items-center justify-start">
            <div className="bodymdmedium relative">이름</div>
            <div className="bodymdsemibold relative text-status-2">*</div>
          </div>
          <div className="box-border flex h-12 w-[312px] flex-row items-center justify-center border-solid border-gray-200 bg-white text-sm">
            <Input type="Primary" placeholder="이메일" btnLabel="" value="김데이" />
          </div>
          <div className="bodyxsregular relative text-gray-500">공개적으로 사용될 이름입니다.</div>
        </div>
        <div className="box-border flex h-24 w-[880px] flex-row items-center justify-start gap-[8px] border-b border-gray-200 px-12 py-6">
          <div className="flex w-[120px] flex-row items-center justify-start">
            <div className="bodymdmedium relative">이메일</div>
            <div className="bodymdsemibold relative text-status-2">*</div>
          </div>
          <div className="flex h-12 w-[312px] items-center justify-center gap-1 border-gray-200 bg-white focus-within:border-primary-700 focus-within:bg-primary-100">
            <Input type="Primary" placeholder="이메일" btnLabel="" value="nday12@naver.com" />
          </div>
        </div>
        <div className="box-border flex h-24 w-[880px] flex-row items-center justify-start gap-[8px] border-b border-gray-200 px-12 py-6">
          <div className="flex w-[120px] flex-row items-center justify-start">
            <div className="bodymdmedium relative leading-[24px]">새 비밀번호</div>
          </div>
          <div className="flex h-12 w-[312px] items-center justify-center gap-1 border-gray-200 bg-white focus-within:border-primary-700 focus-within:bg-primary-100">
            <Input type="Password" placeholder="비밀번호" btnLabel="" />
          </div>
          <div className="bodyxsregular relative text-gray-500">
            새 비밀번호는 8~16자, 영문자, 숫자, 특수문자를 모두 포함합니다.
          </div>
        </div>
        <div className="box-border flex h-24 w-[880px] flex-row items-center justify-start gap-[8px] border-b border-gray-200 px-12 py-6">
          <div className="flex w-[120px] flex-row items-center justify-start">
            <div className="bodymdmedium relative">새 비밀번호 확인</div>
          </div>
          <div className="flex h-12 w-[312px] items-center justify-center gap-1 border-gray-200 bg-white focus-within:border-primary-700 focus-within:bg-primary-100">
            <Input type="Password" placeholder="비밀번호 확인" btnLabel="" />
          </div>
        </div>
        <div className="box-border flex h-24 w-[880px] flex-row items-center justify-start gap-[8px] border-gray-200 px-12 py-6">
          <div className="flex w-[120px] flex-row items-center justify-start">
            <div className="bodymdmedium relative">이메일 수신</div>
          </div>
          <div className="flex flex-row items-center justify-end text-center text-gray-400">
            <div className="flex flex-row items-start justify-start gap-[4px]">
              <input
                type="checkbox"
                className="caret-color:primary-700 mt-0.5 h-[20px] w-[20px] appearance-none border-2 border-gray-400
                          bg-gray-100 bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
              />
              <div className="flex flex-row items-start justify-start">
                <div className="bodymdsemibold relative">동의</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[394px] top-[766px] flex h-12 w-[312px] flex-row items-center justify-center rounded-md bg-primary-600 text-white">
        <Button label="업데이트 하기" size="XLarge" color="pink" />
      </div>

      {/* 포인트 내역 */}
      <div className="bodylsemibold absolute left-[394px] top-[964px] inline-block w-[312px]">
        포인트 내역
      </div>
      <div className="absolute left-[110px] top-[1034px] box-border flex w-[880px] flex-col items-start justify-center gap-[8px] border-[1px] border-gray-200 bg-gray-100 p-6">
        <div className="bodymdsemibold relative text-black">보유 포인트</div>
        <div className="text-13xl flex flex-row items-center justify-center gap-[3px] text-right">
          <div className="mdbold relative text-primary-700">150,000</div>
          <div className="xssemibold relative text-gray-600">P</div>
        </div>
      </div>

      <div className="absolute left-[110px] top-[1222px] flex flex-row items-start justify-start gap-[16px] text-gray-500">
        <button className="bodymdmedium flex flex-row items-start justify-start rounded bg-gray-100 px-4 py-2 focus:bg-primary-100 focus:font-semibold focus:text-primary-800">
          <div className="relative">전체</div>
        </button>
        <button className="bodymdmedium flex flex-row items-start justify-start rounded bg-gray-100 px-4 py-2 focus:bg-primary-100 focus:font-semibold focus:text-primary-800">
          <div className="relative">적립</div>
        </button>
        <button className="bodymdmedium flex flex-row items-start justify-start rounded bg-gray-100 px-4 py-2 focus:bg-primary-100 focus:font-semibold focus:text-primary-800">
          <div className="relative">사용</div>
        </button>
      </div>

      <div className="bodymdmedium absolute left-[110px] top-[1286px] flex flex-col items-start justify-start border-[1px] border-gray-200 bg-white">
        <div className="box-border flex h-[78px] w-[880px] flex-row items-center justify-start gap-[16px] border-b border-gray-200 bg-primary-600 p-6 text-base text-white">
          <input
            type="checkbox"
            className="mt-0.5 h-[20px] w-[20px] appearance-none border-2 border-white 
                  bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
          />
          <div className="relative flex w-[84px] shrink-0 items-center justify-center">날짜</div>
          <div className="relative flex-1">항목</div>
          <div className="flex w-[83px] flex-row items-center justify-center text-right">
            <div className="relative">적립 포인트</div>
          </div>
          <div className="flex w-[83px] flex-row items-center justify-center text-right">
            <div className="relative">사용 포인트</div>
          </div>
        </div>
        <div className="box-border flex h-[78px] w-[880px] flex-row items-center justify-start gap-[16px] border-b border-gray-200 p-6">
          <input
            type="checkbox"
            className="caret-color:primary-700 mt-0.5 h-[20px] w-[20px] appearance-none border-2 border-gray-400 
                  bg-white bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
          />
          <div className="white-space:nowrap bodysmmedium relative flex h-[20px] w-[84px] shrink-0 items-center justify-center text-gray-600">
            2024. 00. 00
          </div>
          <div className="relative flex-1">웰컴 포인트</div>
          <div className="flex w-[83px] flex-row items-center justify-center gap-[1px] text-right">
            <div className="bodysmsemibold relative">+</div>
            <div className="bodymdsemibold relative">150,000</div>
            <div className="bodysmsemibold relative text-gray-600">P</div>
          </div>
          <div className="h-5 w-[83px]" />
        </div>
        <div className="box-border flex h-[78px] w-[880px] flex-row items-center justify-start gap-[16px] border-gray-200 p-6">
          <input
            type="checkbox"
            className="caret-color:primary-700 mt-0.5 h-[20px] w-[20px] appearance-none border-2 border-gray-400 
                  bg-white bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
          />
          <div className="white-space:nowrap bodysmmedium relative flex h-[20px] w-[84px] shrink-0 items-center justify-center text-gray-600">
            2024. 00. 00
          </div>
          <div className="relative flex-1">상담 예약 및 1건</div>
          <div className="flex w-[83px] flex-row items-center justify-center gap-[1px] text-right">
            <div className="bodysmsemibold relative">+</div>
            <div className="bodymdsemibold relative">10,000</div>
            <div className="bodysmsemibold relative text-gray-600">P</div>
          </div>
          <div className="flex w-[83px] flex-row items-center justify-center gap-[1px] text-right">
            <div className="bodysmsemibold relative">-</div>
            <div className="bodymdsemibold relative">50,000</div>
            <div className="bodysmsemibold relative text-gray-600">P</div>
          </div>
        </div>
      </div>

      {/* 결제 내역 */}
      <div className="bodylsemibold absolute left-[394px] top-[1670px] inline-block w-[312px]">
        결제 내역
      </div>

      <div className="absolute left-[110px] top-[1740px] box-border flex w-[880px] flex-col items-start justify-center gap-[8px] border-[1px] border-gray-200 bg-gray-100 p-6 text-left text-black">
        <div className="bodymdsemibold relative inline-block w-[137px]">총 결제 금액</div>
        <div className="flex flex-row items-center justify-center gap-[3px] text-right">
          <div className="mdbold relative">80,000</div>
          <div className="xssemibold relative text-gray-600">원</div>
        </div>
      </div>

      <div className="bodymdmedium absolute left-[110px] top-[1892px] flex flex-col items-start justify-start border-[1px] border-gray-200 bg-white text-gray-600">
        <div className="box-border flex h-[78px] w-[880px] flex-row items-center justify-start gap-[16px] border-b border-gray-200 bg-gray-600 p-6 text-white">
          <input
            type="checkbox"
            className="mt-0.5 h-[20px] w-[20px] appearance-none border-2 border-white 
                  bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
          />
          <div className="relative flex w-[84px] shrink-0 items-center justify-center">날짜</div>
          <div className="relative flex-1">항목</div>
          <div className="flex w-40 flex-row items-center justify-center text-left">
            <div className="relative">승인번호</div>
          </div>
          <div className="relative flex w-14 shrink-0 items-center justify-center">결제수단</div>
          <div className="relative flex w-14 shrink-0 items-center justify-center">상태</div>
          <div className="flex w-[77px] flex-row items-center justify-center text-right">
            <div className="relative">금액</div>
          </div>
        </div>
        <div className="box-border flex h-[78px] w-[880px] flex-row items-center justify-start gap-[16px] border-b border-gray-200 p-6">
          <input
            type="checkbox"
            className="caret-color:primary-700 mt-0.5 h-[20px] w-[20px] appearance-none border-2 border-gray-400 
                  bg-white bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
          />
          <div className="bodysmmedium relative flex w-[84px] shrink-0 items-center text-left">
            2024. 00. 00
          </div>
          <div className="relative flex w-[279px] shrink-0 items-center justify-center text-gray-900">
            상담 예약
          </div>
          <div className="bodysmmedium flex w-40 flex-row items-center justify-center">
            <div className="relative flex-1">000000000000000000</div>
          </div>
          <div className="relative flex w-14 shrink-0 items-center justify-center">하나카드</div>
          <div className="relative flex w-14 shrink-0 items-center justify-center">결제완료</div>
          <div className="bodymdsemibold flex w-[77px] flex-row items-center justify-center gap-[1px] text-right text-gray-900">
            <div className="relative">50,000</div>
            <div className="bodysmsemibold relative text-gray-600">원</div>
          </div>
        </div>
        <div className="box-border flex h-[78px] w-[880px] flex-row items-center justify-start gap-[16px] border-b border-gray-200 p-6">
          <input
            type="checkbox"
            className="caret-color:primary-700 mt-0.5 h-[20px] w-[20px] appearance-none border-2 border-gray-400 
                  bg-white bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
          />
          <div className="bodysmmedium relative flex w-[84px] shrink-0 items-center text-left">
            2024. 00. 00
          </div>
          <div className="relative flex w-[279px] shrink-0 items-center justify-center text-gray-900">
            상담 예약
          </div>
          <div className="bodysmmedium flex w-40 flex-row items-center justify-center">
            <div className="relative flex-1">000000000000000000</div>
          </div>
          <div className="relative flex w-14 shrink-0 items-center justify-center">현대카드</div>
          <div className="relative flex w-14 shrink-0 items-center justify-center">결제완료</div>
          <div className="bodymdsemibold flex w-[77px] flex-row items-center justify-center gap-[1px] text-right text-gray-900">
            <div className="relative">30,000</div>
            <div className="bodysmsemibold relative text-gray-600">원</div>
          </div>
        </div>
      </div>

      <div className="absolute left-[394px] top-[2276px] flex h-12 w-[312px] flex-row items-center justify-center rounded-md bg-gray-200 text-gray-500">
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

export default MemberInfo
