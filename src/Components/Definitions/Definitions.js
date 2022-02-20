import "./Definitions.css";

export const Definitions = ({ word, meanings, category }) => {
  return (
    <div className="meanings">
      {/* dictApi only supports en audio */}
      {meanings[0] && word && category === "en" && (
        <audio
          style={{ backgroundColor: "#fff", borderRadius: 10 }}
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        >
          Your browser does not support the audio element.
        </audio>
      )}

      {word === "" ? (
        <span className="subTitle">Start by typing a word in search box</span>
      ) : (
        meanings.map((mean) => {
          return mean.meanings.map((item) => {
            return item.definitions.map((def) => {
              return (
                <div
                  className="singleMean"
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  <b>{def.definition}</b>
                  <hr style={{ backgroundColor: "black", width: "100%" }} />
                  {def.example && <span>Example: {def.example}</span>}
                  {def.synonyms && (
                    <span>Synonyms: {def.synonyms.map((s) => `${s}`)}</span>
                  )}
                </div>
              );
            });
          });
        })
      )}
    </div>
  );
};
