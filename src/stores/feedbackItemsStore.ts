import { create } from "zustand";
import { exampleFeedbackItems } from "../lib/constants";
import { FeedbackItemType } from "../lib/types";

export const useFeedbackItemsStore = create((set, get) => ({
  feedbackItems: exampleFeedbackItems,
  isLoading: false,
  errorMessage: "",
  selectedLanguage: "",
  getLanguageList: () => {
    return get()
      .feedbackItems.map((item) => item.language)
      .filter((language, index, array) => {
        return array.indexOf(language) === index;
      });
  },
  // getFilteredFeedbackItems: () => {
  //   const state = get();
  //   return state.selectedLanguage
  //     ? state.feedbackItems.filter(
  //         (feedbackItem) => feedbackItem.language === state.selectedLanguage
  //       )
  //     : state.feedbackItems;
  // },

  handleAddNewItem: (text: string) => {
    if (text.includes("#") && text.length >= 3) {
      const language = text
        .split(" ")
        .find((word: string) => word.startsWith("#"))
        ?.substring(1);
      if (!language) return;
      const newItem: FeedbackItemType = {
        id: new Date().getTime(),
        language: language,
        badgeInitials: language.substring(0, 1).toUpperCase(),
        daysAgo: 0,
        text: text,
        upvoteCount: 0,
      };
      set((state) => ({
        feedbackItems: [...state.feedbackItems, newItem],
      }));
    } else return;
  },
  handleSelectLanguage: (language: string) => {
    set((state) => ({ selectedLanguage: language }));
  },
  fetchData: async () => {
    set(() => ({
      isLoading: true,
    }));
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );

      if (!response.ok) {
        set(() => ({ errorMessage: "There was an error" }));
      }
      const data = await response.json();
    } catch (err) {
      set(() => ({ errorMessage: "There was an error" }));
    }
    set(() => ({ isLoading: false }));
  },
}));
