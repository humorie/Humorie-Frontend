import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk'
import { useState } from 'react'

const Container4: React.FC = () => {
  const latitude = 37.37679781463955 // 위도
  const longitude = 126.63480014502834 // 경도
  const counselor = '앤데이'
  const address = '인천광역시 연수구 아카데미로 119'

  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex h-auto w-[1440px] flex-col items-start justify-center bg-gray-50 px-[190px] pb-[380px] pt-[180px]">
      <div className="bodylsemibold mb-[16px] text-rose-400">오시는길</div>
      <div className="lgbold mb-[50px] text-gray-900">
        앤데이가 더 궁금하다면 <br />이 곳에서 만날 수 있어요!
      </div>
      <Map
        center={{ lat: latitude, lng: longitude }}
        style={{ width: '100%', height: '450px' }}
        level={3}>
        <MapMarker
          position={{ lat: latitude, lng: longitude }}
          clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
          onClick={() => setIsOpen(true)}
        />
        {isOpen && (
          <CustomOverlayMap position={{ lat: latitude, lng: longitude }}>
            <div className="flex h-[180px] w-[330px] flex-col items-start justify-start rounded shadow">
              <div className="flex h-[80px] w-full flex-row items-center justify-start gap-[16px] bg-gray-50 px-[24px]">
                <img
                  src="/src/assets/images/avatar/avatar_round1.svg"
                  alt="프로필 사진"
                  className="h-[56px] w-[56px] rounded-[99px]"
                />
                <div className="bodylbold text-gray-600">{counselor}</div>
              </div>
              <div className="flex h-[100px] w-full flex-col items-start justify-center gap-[8px] bg-white px-[24px]">
                <div className="bodymdsemibold text-gray-900">{address}</div>
                <a
                  href={`https://map.kakao.com/link/to/${counselor},${latitude},${longitude}`}
                  target="_blank" // 링크르 새패이지로 여는 속성
                  rel="noopener noreferrer"
                  className="bodymdsemibold text-gray-600">
                  카카오맵으로 보기
                </a>
              </div>
            </div>
          </CustomOverlayMap>
        )}
      </Map>
    </div>
  )
}
export default Container4
