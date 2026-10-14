import { useState } from "react";

function SearchBar({ onSearch }) {
  const [word, SetWord] = useState("");

  function handleChange(e) {
    SetWord(e.target.value);
  }

  function handleHistoryButton() {}

  function submitSearch() {
    onSearch(word.trim());
    SetWord("");
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      submitSearch();
    }
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
      <button onClick={submitSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
