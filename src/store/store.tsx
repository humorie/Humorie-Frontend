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
