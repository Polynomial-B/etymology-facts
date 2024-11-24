export type FeedbackItemType = {
  id: number;
  upvoteCount: number;
  badgeInitials: string;
  companyName: string;
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
};
