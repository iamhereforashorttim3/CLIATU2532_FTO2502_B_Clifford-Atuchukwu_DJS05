import GenresApi from "./utility/genreApi";
import SeasonDetail from "./SeasonDetail";

export default function DetailPageContents({ show, selectedSeason }) {
  console.log("DetailPageContents show", show);
  const totalEpisodes = show.seasons?.reduce((sum, season) => {
    return sum + (season.episodes?.length || 0);
  }, 0);

  return (
    <>
      <div className="detail-header">
        <h1>{show.title}</h1>
        <img src={show.image} />
        <GenresApi genreNames={show.genres} />

        <p>{show.description}</p>
        <p>Total Seasons: {show.seasons?.length || "N/A"}</p>
        <p>Total Episodes: {totalEpisodes || "N/A"}</p>
        <p>Last Updated: {new Date(show.updated).toLocaleDateString()}</p>
      </div>

      <div className="current">
        <h1>Current Season</h1>
        <SeasonDetail season={selectedSeason} />
      </div>
    </>
  );
}
