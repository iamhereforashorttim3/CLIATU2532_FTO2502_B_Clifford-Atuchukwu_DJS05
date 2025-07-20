export default function SeasonDetail({ season }) {
  if (!season) return null;

  return (
    <>
      <div className="season-detail">
        <h1 className="season-title">{season.title}</h1>
        <img className="season-image" src={season.image} alt={season.title} />
        <p className="season-description">{season.description}</p>
      </div>
      <div className="episodes">
        <h2>Episodes</h2>
        <ul>
          {season.episodes.map((episode) => (
            <li className="episode-card" key={episode.episode}>
              <img className="episode-image" src={season.image} />
              <h3 className="episode-title">{episode.title}</h3>
              <p className="episode-description">{episode.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
