import "../../styles/body.css";
import SearchBar from "./SearchBar";
import { Search } from "../Search";
import WordOfTheDay from "./WordOfTheDay";
import Types from "./TypesOfWords";

function Body() {
  return (
    <>
      <section>
        <SearchBar />
        <Search />
        <WordOfTheDay />
        <Types />
      </section>
    </>
  );
}

export default Body;
