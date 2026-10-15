function WordCard({ definition }) {
  if (!definition) {
    return null;
  }

  const entries = Array.isArray(definition.entries) ? definition.entries : [];
  const entry = entries.find(
    (candidate) =>
      Array.isArray(candidate?.senses) &&
      candidate.senses.some(
        (sense) =>
          typeof sense?.definition === "string" && sense.definition.trim(),
      ),
  );
  const sense = entry?.senses.find(
    (candidate) =>
      typeof candidate?.definition === "string" && candidate.definition.trim(),
  );

  if (!entry || !sense) {
    return <p>No definition available.</p>;
  }

  const pronunciation = Array.isArray(entry.pronunciations)
    ? entry.pronunciations.find(
        (candidate) =>
          typeof candidate?.text === "string" && candidate.text.trim(),
      )?.text
    : null;
  const getRelatedSenses = (currentSense) => [
    currentSense,
    ...(Array.isArray(currentSense.subsenses)
      ? currentSense.subsenses.flatMap(getRelatedSenses)
      : []),
  ];
  const relatedSenses = getRelatedSenses(sense);
  const example = relatedSenses
    .flatMap((relatedSense) =>
      Array.isArray(relatedSense.examples) ? relatedSense.examples : [],
    )
    .find((candidate) => typeof candidate === "string" && candidate.trim());
  const usageQuote = relatedSenses
    .flatMap((relatedSense) =>
      Array.isArray(relatedSense.quotes) ? relatedSense.quotes : [],
    )
    .find((quote) => typeof quote?.text === "string" && quote.text.trim());

  return (
    <div>
      {typeof definition.word === "string" && <h2>{definition.word}</h2>}
      <div>
        {typeof entry.partOfSpeech === "string" && (
          <h3>{entry.partOfSpeech}</h3>
        )}
        {pronunciation && (
          <h4>
            <i>{pronunciation}</i>
          </h4>
        )}
        <p>{sense.definition}</p>
        {example && (
          <>
            <h4>Example</h4>
            <p>{example}</p>
          </>
        )}
        {!example && usageQuote && (
          <>
            <h4>Usage</h4>
            <blockquote>
              <p>{usageQuote.text}</p>
            </blockquote>
          </>
        )}
      </div>
    </div>
  );
}

export default WordCard;
