"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useFetchMovies } from "@/hooks/useFetchMovies";
import React from "react";

export default function HorizontalScrollMovieList() {
  const { movies, loading, error } = useFetchMovies(1);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="w-full flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <p className="text-app-black font-bold text-xl">Trending Movies</p>
        <a href="#">See More</a>
      </div>

      <ScrollArea className="whitespace-nowrap">
        <div className="flex w-max space-x-4 p-4">
          {movies.map((movie) => (
            <div key={movie.id} className="max-w-[160px]">
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt={movie.original_title}
                className="rounded-lg aspect-4/6 mb-2 w-[160px] object-cover"
              />
              <p className="text-app-black text-center truncate">{movie.original_title}</p>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
