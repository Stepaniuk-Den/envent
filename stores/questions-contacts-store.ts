import { create } from "zustand";

interface Item {
  id: number;
}

interface QuestionsStore {
  keyQuestionsContacts: Item;
  update: (keyQuestionsContacts: Item) => void;
}

export const useQuestionsContactsStore = create<QuestionsStore>((set) => ({
  keyQuestionsContacts: { id: 0 },
  update: (keyQuestionsContacts) => set(() => ({ keyQuestionsContacts })),
}));
