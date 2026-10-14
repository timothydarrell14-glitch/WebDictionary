// import "../../styles/wordCard";

function WordCard({ definition }) {
  // 1. Guard against empty/undefined data before the user types anything
  if (!definition) {
    return "No word defined"; // Or return <div>Type a word to begin searching...</div>
  }
  // console.log(definition.entries[1]);

  // 2. Safely render now that we know definition exists
  return (
    <div>
      <h2>{definition.word}</h2>
      <div>
        <h3>{definition.entries[0].partOfSpeech}</h3>
        <h4>
          <i>{definition.entries[0].pronunciations[0].text}</i>
        </h4>
        <p>{definition.entries[0].senses[0].definition}</p>
        <p>{definition.entries[0].senses[0].examples}</p>
      </div>
    </div>
  );
}

export default WordCard;
