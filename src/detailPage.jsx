import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SeasonSelector from "./Components/Api/seasonSelector";
import DetailPageContents from "./Components/detailPageContents";

function DetailPage() {
  const { id } = useParams();
  const [show, setShow] = useState();
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchDetails() {
    try {
      const response = await fetch(`https://podcast-api.netlify.app/id/${id}`);
      if (!response.ok) {
        throw new Error("Failed to reach podcasts");
      }
      const data = await response.json();

      const selectedShow = data;

      if (!selectedShow) {
        throw new Error("Podcast not found");
      }

      setShow(data);
      setSelectedSeason(data.seasons[0]);
      setError(null);
    } catch (error) {
      console.error("This did not work", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchDetails();
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>There was an error {error.message}</p>;
  if (!show) return null;

  return (
    <>
      <DetailPageContents show={show} selectedSeason={selectedSeason} />

      <SeasonSelector
        seasons={show.seasons}
        selectedSeason={selectedSeason}
        onChange={setSelectedSeason}
      />
    </>
  );
}

export default DetailPage;
