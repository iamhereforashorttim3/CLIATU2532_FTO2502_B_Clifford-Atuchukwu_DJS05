export default function SeasonSelector({ seasons, selectedSeason, onChange }) {
  function handleChange(e) {
    const season = seasons.find((s) => s.season === +e.target.value);
    onChange(season);
  }

  return (
    <select value={selectedSeason?.season || ""} onChange={handleChange}>
      {seasons.map((s) => (
        <option key={s.season} value={s.season}>
          Season {s.season}
        </option>
      ))}
    </select>
  );
}
