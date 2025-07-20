export default function GenresApi({ genreNames }) {
  if (!genreNames || genreNames.length === 0) return <p>Genres: Unknown</p>;

  return (
    <div>
      <p>Genres:</p>
      <ul>
        {genreNames.map((genre, index) => (
          <li className="show-genre" key={index}>
            {genre}
          </li>
        ))}
      </ul>
    </div>
  );
}
