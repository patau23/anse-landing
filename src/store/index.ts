import { create } from 'zustand';
import { Sections } from '@/shared/constants/navigation.ts';

type State = {
  section: string;
  isScrolling: boolean;
};

type Action = {
  updateSection: (section: State['section']) => void;
  updateScrolling: (scrolling: State['isScrolling']) => void;
};

export const useStore = create<State & Action>((set) => ({
  section: Sections[0],
  isScrolling: false,
  updateSection: (section: string) => set(() => ({ section: section })),
  updateScrolling: (scrolling: boolean) =>
    set(() => ({ isScrolling: scrolling })),
}));
