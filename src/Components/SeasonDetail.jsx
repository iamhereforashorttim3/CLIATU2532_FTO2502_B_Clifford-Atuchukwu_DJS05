export default function SeasonDetail({ season }) {
  if (!season) return null;

  return (
    <>
      <div className="season-detail">
        <h1>{season.title}</h1>
        <img src={season.image} alt={season.title} />
        <p>{season.description}</p>
      </div>
      <div className="episodes">
        <h2>Episodes</h2>
        <ul>
          {season.episodes.map((episode) => (
            <li key={episode.episode}>
              <img className="season-image" src={season.image} />
              <h3 className="season-title">{episode.title}</h3>
              <p className="season-description">{episode.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
