import { FeedbackItemType } from "./types";

export const MAX_CHARACTERS = 150;

export const exampleFeedbackItems: FeedbackItemType[] = [
  {
    id: 1,
    upvoteCount: 200,
    badgeInitials: "M",
    companyName: "Moo Moo",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, perspiciatis placeat? Error et doloribus quo?",
    daysAgo: 4,
  },
  {
    id: 2,
    upvoteCount: 50,
    badgeInitials: "F",
    companyName: "Fields",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, perspiciatis placeat? Error et doloribus quo?",
    daysAgo: 4,
  },
  {
    id: 3,
    upvoteCount: 170,
    badgeInitials: "C",
    companyName: "Cows",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, perspiciatis placeat? Error et doloribus quo?",
    daysAgo: 4,
  },
];
