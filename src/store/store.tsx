import { create } from 'zustand'

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
  title: string
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

const useDropdownStore = create<DropdownState>((set) => ({
  selectedDropdowns: {},
  setSelectedDropdown: (dropdownKey, value) =>
    set((state) => ({
      selectedDropdowns: { ...state.selectedDropdowns, [dropdownKey]: value },
    })),
}))
export default useDropdownStore
