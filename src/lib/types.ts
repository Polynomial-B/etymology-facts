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

export type ContainerProps = {
  feedbackItems: FeedbackItemType[];
  isLoading: boolean;
  errorMessage: string;
  handleAddNewItem?: (text: string) => void;
};
export type HeaderProps = {
  handleAddNewItem?: (text: string) => void;
};
export type SidebarProps = {
  handleSelectLanguage: (language: string) => void;
  languageList: string[];
};
