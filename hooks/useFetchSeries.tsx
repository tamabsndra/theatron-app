import { useState, useEffect } from "react";
import { getPopularSeries, getTopRatedSeries } from "../lib/tmdbApi";

export const useFetchPoplarSeries = (page: number = 1) => {
  const [series, setSeries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await getPopularSeries(page);
        setSeries(data);
      } catch (error) {
        setError("Failed to fetch series");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page]);

  return { series, loading, error };
};

export const useFetchTopRatedSeries = (page: number = 1) => {
  const [series, setSeries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await getTopRatedSeries(page);
        setSeries(data);
      } catch (error) {
        setError("Failed to fetch series");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page]);

  return { series, loading, error };
};
