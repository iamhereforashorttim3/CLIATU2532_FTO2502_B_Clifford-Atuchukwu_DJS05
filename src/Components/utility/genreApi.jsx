import { useEffect, useState } from "react";

export default function GenresApi({genreIds}) {
    const [genreNames, setGenreNames] = useState([]);

    useEffect(() => {
        async function fetchGenres() {
            try {
                const response = await Promise.all(
                    genreIds.map(async (id) => {
                        const response = await fetch(`https://podcast-api.netlify.app/genre/${id}`)
                        const data = await response.json();
                        return data.name || "Unknown";
                    })
                )
            }
        }
    })
}