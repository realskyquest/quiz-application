// This makes the url  and returns it
export function makeApiUrl(selectedCategory, selectedDifficulty) {
  const categoryMappings = {
    history: 23,
    science: 17,
    geography: 22,
    literature: 10,
    sports: 21,
    music: 12,
    movies: 14,
    art: 25,
    technology: 18,
    math: 19,
    animals: 27,
    "general knowledge": 9,
    politics: 24,
    mythology: 20,
  };

  const category = categoryMappings[selectedCategory];
  const baseUrl = `https://opentdb.com/api.php?amount=10${
    category ? `&category=${category}` : ""
  }`;

  return `${baseUrl}&difficulty=${selectedDifficulty}&type=multiple`;
}

// This calls the url and get a array of questions
export async function callFetch(fetchUrl) {
  try {
    const response = await fetch(fetchUrl);
    const data = await response.json();
    if (response.ok) {
      return data.results;
    } else {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.log("Error: |", error, "|");
  }
}
