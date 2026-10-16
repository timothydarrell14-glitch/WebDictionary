import "../../styles/body.css";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { Search } from "../Search";
import WordOfTheDay from "./WordOfTheDay";
import Types from "./TypesOfWords";

function Body() {
  const [searchWord, setSearchWord] = useState("");

  return (
    <>
      <section id="display-section">
        <SearchBar onSearch={setSearchWord} />
        <Search searchWord={searchWord} />
        <WordOfTheDay />
        <Types />
      </section>
    </>
  );
}

export default Body;
