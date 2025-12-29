import { Reactions } from "../types";

export const reactionsMapping: Record<Reactions, string> = {
  [Reactions.HEART]: "❤️",
  [Reactions.THUMBS_UP]: "👍",
  [Reactions.LAUGH]: "😄",
  [Reactions.SAD_RESET]: "😢",
  [Reactions.POUTING_RESET]: "😡",
  [Reactions.THUMBS_DOWN_RESET]: "👎",
};
