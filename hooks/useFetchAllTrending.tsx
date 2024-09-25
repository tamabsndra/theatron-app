import { useState, useEffect } from "react";
import { allTrending } from "../lib/tmdbApi";

export const useFetchAllTrending = () => {
  const [trendings, setTrending] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setLoading(true);
        const data = await allTrending();
        setTrending(data);
      } catch (error) {
        setError("Failed to fetch trending");
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  return { trendings, loading, error };
};
