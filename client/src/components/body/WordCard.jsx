// import "../../styles/wordCard";

function WordCard({ definition }) {
  if (!definition || !definition.entries) {
    return <p>No definitions found.</p>;
  }
  const [word, entries] = definition;
  return (
    <div>
      <h2>{word}</h2>
      {entries.map((entry, index) => (
        <div key={index}>
          <h3>{entry.partOfSpeech}</h3>
          <h4>
            <i>{entry.pronounciation.text}</i>
          </h4>
        </div>
      ))}
    </div>
  );
}

export default WordCard;
