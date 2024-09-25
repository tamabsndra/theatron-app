/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import React from "react";

interface HorizontalScrollListProps {
  title: string;
  items: Array<{
    id: number;
    poster_path: string;
    original_title?: string;
    original_name?: string;
  }>;
  type: "movie" | "series";
  loading: boolean;
  error: string | null;
  seeMoreLink?: string;
}

export default function HorizontalScrollList({
  title,
  items,
  type,
  loading,
  error,
  seeMoreLink = "#",
}: HorizontalScrollListProps) {
    
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="w-full flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <p className="text-app-white font-bold text-xl">{title}</p>
        <a className="text-app-white hover:text-app-red" href={seeMoreLink}>See More</a>
      </div>

        <ScrollArea className="whitespace-nowrap">
            <div className="flex w-max space-x-4 py-4 mb-2">
            {items.map((item) => (
            <a key={item.id} href={type === "movie" ? `/movie/?movie=${item.id}` : `/series/?series=${item.id}`} className="max-w-[160px]">
              <div key={item.id} className="relative rounded-lg overflow-hidden aspect-4/6 max-w-[160px]">
                  <img
                      src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                      alt={type === "movie" ? item.original_title : item.original_name}
                      className="rounded-lg transform transition duration-300 ease-in-out hover:scale-110 aspect-4/6 mb-2 w-[160px] object-cover"
                      />
              </div>
                <p className="text-app-white mt-2 text-center truncate">
                      {type === "movie" ? item.original_title : item.original_name}
                </p>
            </a>
            ))}
            </div>
            <ScrollBar orientation="horizontal" className="opacity-35" />
        </ScrollArea>
    </section>
  );
}
