import { create } from 'zustand'

/* ----------------- 태그 및 모달창 Store ------------------- */
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

export interface Tag {
  title?: string
  content: string
}

interface TagsState {
  tags: Tag[]
  selectedSymptoms: string[]
  addTag: (tag: Tag) => void
  removeTag: (content: string) => void
  addSelectedSymptom: (symptom: string) => void
  removeSelectedSymptom: (symptom: string) => void
}

export const useTagsStore = create<TagsState>((set) => ({
  tags: [],
  selectedSymptoms: [],
  addTag: (tag: Tag) => set((state) => ({ tags: [...state.tags, tag] })),
  removeTag: (content: string) =>
    set((state) => ({
      tags: state.tags.filter((tag) => tag.content !== content),
    })),
  addSelectedSymptom: (symptom) =>
    set((state) => ({ selectedSymptoms: [...state.selectedSymptoms, symptom] })),
  removeSelectedSymptom: (symptom) =>
    set((state) => ({ selectedSymptoms: state.selectedSymptoms.filter((s) => s !== symptom) })),
}))

interface DropdownState {
  selectedDropdowns: { [key: string]: string }
  setSelectedDropdown: (dropdownKey: string, value: string) => void
}

export const useDropdownStore = create<DropdownState>((set) => ({
  selectedDropdowns: {},
  setSelectedDropdown: (dropdownKey, value) =>
    set((state) => ({
      selectedDropdowns: { ...state.selectedDropdowns, [dropdownKey]: value },
    })),
}))
/* ------------------------------------------------------ */

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
  meetingType: string // '온라인' or '오프라인'
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

/* ------------------- 카테고리 Store --------------------- */
interface CategoryState {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}

export const useCategoryStore = create<CategoryState>((set) => ({
  selectedCategory: '청소년', // 초기 상태 설정
  setSelectedCategory: (category: string) => set({ selectedCategory: category }),
}))
/* -------------------------------------------------
/* ------------------- 토큰인증 Store --------------------- */
interface AuthState {
  isLoggedIn: boolean
  logIn: () => void
  logOut: () => void
  checkAuth: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  logIn: () => set({ isLoggedIn: true }),
  logOut: () => set({ isLoggedIn: false }),
  checkAuth: () => {
    const refreshToken = localStorage.getItem('refreshToken')
    set({ isLoggedIn: !!refreshToken })
  },
}))
