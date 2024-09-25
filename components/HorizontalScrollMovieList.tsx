"use client";

import { useFetchMovies } from "@/hooks/useFetchMovies";
import HorizontalScrollList from "@/components/HorizontalScrollList";
import React from "react";

export default function HorizontalScrollMovieList() {
  const { movies, loading, error } = useFetchMovies(1);

  return (
    <HorizontalScrollList
      title="Trending Movies"
      items={movies}
      type="movie"
      loading={loading}
      error={error}
      seeMoreLink="#"
    />
  );
}
