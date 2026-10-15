import { useEffect, useState } from "react";
import WordCard from "./body/WordCard";

export function Search({ searchWord }) {
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    if (!searchWord) {
      return;
    }

    const controller = new AbortController();

    const fetchWord = async () => {
      try {
        const response = await fetch(
          `https://freedictionaryapi.com/api/v1/entries/en/${encodeURIComponent(searchWord)}`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Word not found");
        }

        const data = await response.json();
        setSearchResult({ query: searchWord, definition: data });
      } catch (err) {
        if (controller.signal.aborted) {
          return;
        }

        console.error(err);
        setSearchResult({ query: searchWord, error: "Word not found" });
      }
    };

    fetchWord();
    return () => controller.abort();
  }, [searchWord]);

  const currentResult =
    searchResult?.query === searchWord ? searchResult : null;

  return (
    <div>
      {currentResult?.error && (
        <p className="error-message">{currentResult.error}</p>
      )}
      <WordCard definition={currentResult?.definition} />
    </div>
  );
}
