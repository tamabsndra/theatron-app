"use client";

import { useFetchPoplarSeries } from "@/hooks/useFetchSeries";
import HorizontalScrollList from "@/components/HorizontalScrollList";
import React from "react";

export default function HorizontalScrollSeriesList() {
  const { series, loading, error } = useFetchPoplarSeries(1);

  return (
    <HorizontalScrollList
      title="Popular Series"
      items={series}
      type="series"
      loading={loading}
      error={error}
      seeMoreLink="#"
    />
  );
}
