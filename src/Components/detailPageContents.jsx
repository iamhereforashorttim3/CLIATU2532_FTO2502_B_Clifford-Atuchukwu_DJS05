import SeasonDetail from "./SeasonDetail";

export default function DetailPageContents({ show, selectedSeason }) {
  return (
    <>
      <div className="detail-header">
        <h1>{show.title}</h1>
        <img src={show.image} />
        <p>{show.genres}</p>
        <p>{show.description}</p>
      </div>

      <div className="current">
        <h1>Current Season</h1>
        <SeasonDetail season={selectedSeason} />
      </div>
    </>
  );
}
