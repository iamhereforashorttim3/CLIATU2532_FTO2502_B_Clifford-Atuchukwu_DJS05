import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailPage() {
  const { id } = useParams();
  const [show, setShow] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchDetails() {
    try {
      const response = await fetch(`https://podcast-api.netlify.app/id/${id}`);
      if (!response.ok) {
        throw new Error("Failed to reach podcasts");
      }
      const data = await response.json();

      setShow(data);
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
  console.log("Shows", show);

  return (
    <>
      <h1>This is text</h1>
    </>
  );
}

export default DetailPage;
