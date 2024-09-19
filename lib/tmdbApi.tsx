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
