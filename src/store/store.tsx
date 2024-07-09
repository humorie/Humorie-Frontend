import { create } from 'zustand'
import Calendar from '../components/reservation/Calendar'

interface ModalState {
  modalOpen: boolean
  openModal: () => void
  closeModal: () => void
}

export const useModalStore = create<ModalState>((set) => ({
  modalOpen: false,
  openModal: () => set({ modalOpen: true }),
  closeModal: () => set({ modalOpen: false }),
}))

interface Tag {
  title: string
  content: string
}

interface TagsState {
  tags: Tag[]
  addTag: (tag: Tag) => void
}

export const useTagsStore = create<TagsState>((set) => ({
  tags: [],
  addTag: (tag: Tag) => set((state) => ({ tags: [...state.tags, tag] })),
}))

/* ------------------- 상담예약 Store --------------------- */
// 달력 상태관리
interface DateState {
  selectedDate: Date | null
  setSelectedDate: (date: Date) => void
}

export const useDateStore = create<DateState>((set) => ({
  selectedDate: null,
  setSelectedDate: (date: Date) => set({ selectedDate: date }),
}))

// 타임테이블 상태관리
interface TimeState {
  selectedTime: string | null
  setSelectedTime: (time: string) => void
}

export const useTimeStore = create<TimeState>((set) => ({
  selectedTime: null,
  setSelectedTime: (time: string) => set({ selectedTime: time }),
}))
// 장소 상태관리
interface MeetingState {
  meetingType: string
  onlineOption: string
  setMeetingType: (type: string) => void
  setOnlineOption: (option: string) => void
}

export const useMeetingStore = create<MeetingState>((set) => ({
  meetingType: '온라인',
  onlineOption: 'Zoom 미팅',
  setMeetingType: (type) => set({ meetingType: type }),
  setOnlineOption: (option) => set({ onlineOption: option }),
}))
/* ------------------------------------------------------------ */
