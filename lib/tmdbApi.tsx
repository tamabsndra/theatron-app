import axios from "axios";

// Create an axios instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TMDB_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
    Accept: "application/json",
  },
});

// Function to get popular movies
export const getPopularMovies = async (page: number = 1) => {
  try {
    const response = await api.get(`/movie/popular?language=en-US&page=${page}`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw error;
  }
};

export const getPopularSeries = async (page: number = 1) => {
  try {
    const response = await api.get(`/tv/popular?language=en-US&page=${page}`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular series:", error);
    throw error;
  }
}

export const getTopRatedSeries = async (page: number = 1) => {
  try {
    const response = await api.get(`/tv/top_rated?language=en-US&page=${page}`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching top rated series:", error);
    throw error;
  }
}

export const allTrending = async () => {
  try {
    const response = await api.get(`/trending/all/week?language=en-US`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching All trending:", error);
    throw error;
  }
}

export const getDetailMovies = async (movie_id: number = 365177) => {
  try {
    const response = await api.get(`/movie/${movie_id}?language=en-US`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching detail movies:", error);
    throw error;
  }
}