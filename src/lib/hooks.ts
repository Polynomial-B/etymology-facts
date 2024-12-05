import { useContext } from "react";
import { FeedbackContext } from "../contexts/FeedbackContextProvider";

export function useFeedbackContext() {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error("Feedback context error");
  }
  return context;
}
