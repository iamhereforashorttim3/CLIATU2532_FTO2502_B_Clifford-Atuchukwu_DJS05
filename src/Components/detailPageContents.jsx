export default function DetailPageContents({ show }) {
  return (
    <>
      <div className="detail-header">
        <h1>{show.title}</h1>
        <img src={show.image} />
        <p>{show.genres}</p>
        <p>{show.description}</p>
      </div>
      <h1>Current Season</h1>
      <div className="current"></div>
    </>
  );
}
