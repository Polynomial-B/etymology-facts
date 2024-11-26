import { FeedbackItemType } from "./types";

export const MAX_CHARACTERS = 150;

export const exampleFeedbackItems: FeedbackItemType[] = [
  {
    id: 1,
    upvoteCount: 200,
    badgeInitials: "B",
    language: "Basque",
    text: "The #Basque word 'urdina' (blue in English) comes from the word for water, 'ur'.",
    daysAgo: 4,
  },
  {
    id: 2,
    upvoteCount: 50,
    badgeInitials: "E",
    language: "English",
    text: "The #English word 'bear' was originally a euphamism (meaning 'brown' or 'wild animal') that was used instead of the animal's, now lost, name.",
    daysAgo: 4,
  },
  {
    id: 3,
    upvoteCount: 170,
    badgeInitials: "S",
    language: "Spanish",
    text: "The #Spanish word 'izquierda' (left in English) comes from the Basque word of the same meaning 'ezkerra'.",
    daysAgo: 4,
  },
  {
    id: 4,
    upvoteCount: 22,
    badgeInitials: "W",
    language: "Welsh",
    text: "The #Welsh word 'Cymru' means 'friend' as opposed to the English word of the same meaning 'Wales' which means 'stranger' or 'outsider'.",
    daysAgo: 2,
  },
];
