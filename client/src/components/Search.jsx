export const Search = async (searchWord) => {
  try {
    const word = searchWord;
    const response = await fetch(
      `https://freedictionaryapi.com/api/v1/entries/en/${word}`,
    );

    if (!response.ok) {
      throw new Error("Network Error");
    }
    let returned_word = await response.json();
    console.log(returned_word);
  } catch (error) {
    console.error(error);
    return "Word not found";
  }
};
