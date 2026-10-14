import { useState, useEffect } from "react";
import WordCard from "./body/WordCard";

export function Search({ searchWord }) {
  // 1. Create a state variable to hold the API data
  const [returnedWord, setReturnedWord] = useState(null);
  const [error, setError] = useState(null);

  // 2. Run the API request whenever 'searchWord' changes
  useEffect(() => {
    // Don't search if the input is empty
    if (!searchWord) {
      setReturnedWord(null);
      return;
    }

    const fetchWord = async () => {
      try {
        setError(null); // Clear previous errors
        const response = await fetch(
          `https://freedictionaryapi.com/api/v1/entries/en/${encodeURIComponent(searchWord)}`,
        );

        if (!response.ok) {
          throw new Error("Word not found");
        }

        const data = await response.json();

        // 3. Save the data to React State (This triggers the UI update!)
        setReturnedWord(data);
      } catch (err) {
        console.error(err);
        setError("Word not found");
        setReturnedWord(null);
      }
    };

    fetchWord();
  }, [searchWord]); // This array tells React to re-run the function whenever searchWord changes

  // 4. Render the UI safely based on the state updates
  return (
    <div>
      {error && <p className="error-message">{error}</p>}

      {/* Pass the state object cleanly down to WordCard */}
      <WordCard definition={returnedWord} />
    </div>
  );
}
