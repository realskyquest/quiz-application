// This makes the url  and returns it
export let categories = [
  "History",
  "Science",
  "Geography",
  "Literature",
  "Sports",
  "Music",
  "Movies",
  "Art",
  "Technology",
  "Math",
  "Animals",
  "General knowledge",
  "Politics",
  "Mythology",
];

export function makeApiUrl(
  selectedCategory,
  selectedDifficulty,
  questionAmount
) {
  let amount = questionAmount;
  const categoryMappings = {
    History: 23,
    Science: 17,
    Geography: 22,
    Literature: 10,
    Sports: 21,
    Music: 12,
    Movies: 14,
    Art: 25,
    Technology: 18,
    Math: 19,
    Animals: 27,
    "General knowledge": 9,
    Politics: 24,
    Mythology: 20,
  };

  //let category = categoryMappings[selectedCategory];
  const category = categoryMappings[selectedCategory];
  const baseUrl = `https://opentdb.com/api.php?amount=${amount}&category=${category}`;

  return `${baseUrl}&difficulty=${lowerFirstLetter(
    selectedDifficulty
  )}&type=multiple`;
}

function lowerFirstLetter(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}
