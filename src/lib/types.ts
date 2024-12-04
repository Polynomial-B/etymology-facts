export type FeedbackItemType = {
  id: number;
  upvoteCount: number;
  badgeInitials: string;
  language: string;
  text: string;
  daysAgo: number;
};
export type FeedbackItemProps = {
  feedbackItem: FeedbackItemType;
};

export type HeaderProps = {
  handleAddNewItem?: (text: string) => void;
};

export type FeedbackContextType = {
  isLoading: boolean;
  errorMessage: string;
  languageList: string[];
  handleAddNewItem: (text: string) => void;
  filteredFeedbackItems: FeedbackItemType[];
  handleSelectLanguage: (language: string) => void;
};
