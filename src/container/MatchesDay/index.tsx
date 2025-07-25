"use client";
import { memo, useMemo } from "react";
import { getDateFilter, useMatchesByDate } from "@/libs/hooks";
import { useSearchParams } from "next/navigation";
import { matchesFilter } from "@/utils/filters";
import Matches from "@/container/MatchList";
import styles from "./index.module.scss";
import EmptyState from "@/components/EmptyState";

const MatchesDay = () => {
  const searchParams = useSearchParams();
  const date = getDateFilter(searchParams?.get("date"));
  const { data } = useMatchesByDate(date);

  const matches = useMemo(
    () => (data ? matchesFilter({ data, searchParams }) : []),
    [searchParams, data],
  );

  if (!matches.length) {
    return (
      <EmptyState text="Please adjust your filters. No results were found for this journey." />
    );
  }

  return (
    <div className={styles.content}>
      <Matches data={matches} />
    </div>
  );
};

export default memo(MatchesDay);
