import { useEffect, useState } from "react";

const apiKey = "081746a99ae44a1181473147fa82d697";

function useData(params) {
  const [data, setData] = useState("");

  useEffect(() => {
    const abController = new AbortController();

    async function FetchData() {
      try {
        const res = await fetch(
          `https://rawg.io/api/games?page_size=40&?token&key=${apiKey}`,
          {
            signal: abController.signal,
          }
        );

        const data = await res.json();

        setData(data.results);
      } catch (error) {
        console.error(error);
      }
    }

    FetchData();

    return () => {
      abController.abort();
    };
  }, []);

  return data;
}

export default useData;
