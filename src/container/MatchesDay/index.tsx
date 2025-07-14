"use client";
import { memo, useMemo } from "react";
import { getDateFilter, useMatchesByDate } from "@/libs/hooks";
import { useSearchParams } from "next/navigation";
import { matchesFilter } from "@/utils/filters";
import Matches from "@/container/MatchList";
import styles from "./index.module.scss";

const MatchesDay = () => {
  const searchParams = useSearchParams();
  const date = getDateFilter(searchParams?.get("date"));
  const { data } = useMatchesByDate(date);

  const filteredData = useMemo(
    () => (data ? matchesFilter({ data, searchParams }) : []),
    [searchParams, data],
  );

  return (
    <div className={styles.content}>
      {!!filteredData.length && <Matches data={filteredData} />}
      {!filteredData.length && (
        <div className={styles.emptyState}>
          Please adjust your filters. No results were found for this journey.
        </div>
      )}
    </div>
  );
};

export default memo(MatchesDay);
