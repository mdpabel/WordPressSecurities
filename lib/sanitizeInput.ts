import sanitizeHtml from "sanitize-html";
import Filter from "bad-words";

const filter = new Filter();

export const inputSanitize = (input: string) => sanitizeHtml(input);

export const isProfane = (input: string) => {
  filter.removeWords("hell", "hello");
  return filter.isProfane(input);
};
