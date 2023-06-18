// Array of all possible difficulties
export let difficulties = ["easy", "medium", "hard"];

// Array of all the categories
export let categories = [
  "history",
  "science",
  "geography",
  "literature",
  "sports",
  "music",
  "movies",
  "art",
  "technology",
  "math",
  "animals",
  "general knowledge",
  "politics",
  "mythology",
];

// Takes a string "apple" to this "Apple"
export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
