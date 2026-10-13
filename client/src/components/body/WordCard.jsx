// import "../../styles/wordCard";

function WordCard({ definition }) {
  // 1. Guard against empty/undefined data before the user types anything
  if (!definition) {
    return "No word defined"; // Or return <div>Type a word to begin searching...</div>
  }
  console.log(definition.entries);

  // 2. Safely render now that we know definition exists
  return (
    <div>
      <h2>{definition.word}</h2>
    </div>
  );
}

export default WordCard;
