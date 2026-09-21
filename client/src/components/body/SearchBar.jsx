import { useState } from "react";
import { Search } from "../Search";
import WordCard from "./WordCard";

function SearchBar() {
  const [word, SetWord] = useState("");

  function handleChange(e) {
    SetWord(e.target.value);
  }

  function handleHistoryButton() {}

  function handleKeyPress(e) {
    const key = e.key;
    if (key === "Enter") {
      console.log("Enter key is pressed");
      initiateSearch();
    }
  }

  async function initiateSearch() {
    if (word.trim() === "") return;
    SetWord(await Search(word));
    <WordCard definition={word} />;
  }

  return (
    <div id="search">
      <button onClick={handleHistoryButton}>History</button>
      <input
        id="search-word-input"
        type="text"
        placeholder="Please enter search word"
        value={word ?? ""}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      ></input>
      <br></br>
      <button onClick={initiateSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
