import { create } from "zustand"

interface PeekSidebarStore {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const usePeekSidebar = create<PeekSidebarStore>()((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}))
