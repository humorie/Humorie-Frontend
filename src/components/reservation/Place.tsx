import React from 'react'
import RadioButton from '../RadioButton'
import { useMeetingStore } from '../../store/store'
import KakaoMapApi from '../../services/KakaoMapApi'

const Place: React.FC = () => {
  const { meetingType, setMeetingType, onlineOption, setOnlineOption } = useMeetingStore()

  return (
    <div className="flex w-full flex-col items-start justify-start gap-[24px] bg-transparent text-black">
      <div className="xsbold mb-4 text-center text-gray-900">장소</div>
      <div className="bodylmedium flex w-full flex-col items-start justify-center gap-[24px] text-gray-900">
        <RadioButton
          checked={meetingType === '온라인'}
          onChange={() => setMeetingType('온라인')}
          label="온라인"
          name="meetingType"
          value="online"
        />
        <RadioButton
          checked={meetingType === '오프라인'}
          onChange={() => setMeetingType('오프라인')}
          label="오프라인"
          name="meetingType"
          value="offline"
        />
      </div>
      {meetingType === '온라인' && (
        <div className="bodylmedium flex w-full flex-col items-start justify-center gap-[24px] text-gray-900">
          <div className="h-[0px] w-[520px] border border-gray-200"></div>
          <RadioButton
            checked={onlineOption === 'Zoom 미팅'}
            onChange={() => setOnlineOption('Zoom 미팅')}
            label="Zoom 미팅"
            name="onlineOptions"
            value="zoom"
          />
          <RadioButton
            checked={onlineOption === 'Google Meet'}
            onChange={() => setOnlineOption('Google Meet')}
            label="Google Meet"
            name="onlineOptions"
            value="google_meet"
          />
          <RadioButton
            checked={onlineOption === '전화상담'}
            onChange={() => setOnlineOption('전화상담')}
            label="전화상담"
            name="onlineOptions"
            value="phone"
          />
        </div>
      )}
      {meetingType === '오프라인' && <KakaoMapApi />}
    </div>
  )
}

export default Place
