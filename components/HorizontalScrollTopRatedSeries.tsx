"use client";

import HorizontalScrollList from "./HorizontalScrollList";
import { useFetchTopRatedSeries } from "@/hooks/useFetchSeries";
import React from "react";

export default function HorizontalScrollTopRatedSeries() {
  const { series, loading, error } = useFetchTopRatedSeries(1);

  return (
    <HorizontalScrollList
      title="Top Rated Series"
      items={series}
      type="movie"
      loading={loading}
      error={error}
      seeMoreLink="#"
    />
  );
}
