"use client";
import { memo, useMemo } from "react";
import { useDateFilter, useMatchesByDate } from "@/libs/hooks";
import { useSearchParams } from "next/navigation";
import { matchesFilter } from "@/utils/filters";
import Matches from "@/container/Matches";
import styles from "./index.module.scss";

const MatchsDayPage = () => {
  const searchParams = useSearchParams();
  const date = useDateFilter(searchParams?.get("date"));
  const { data, isLoading } = useMatchesByDate(date);

  const filteredData = useMemo(
    () => (data ? matchesFilter({ data, searchParams }) : []),
    [searchParams, data],
  );

  return (
    <div className={styles.content}>
      {isLoading && <div>...Loading</div>}
      {!isLoading && <Matches data={filteredData} />}
    </div>
  );
};

export default memo(MatchsDayPage);
