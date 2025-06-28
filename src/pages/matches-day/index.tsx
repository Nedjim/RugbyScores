"use client";
import { memo, useMemo } from "react";
import { useDateFilter, useScoresByDate } from "@/app/libs/hooks";
import { useRouter } from "next/router";
import { matchsFilter } from "@/app/utils/filters";
import Matchs from "@/app/container/Matchs";
import styles from "./index.module.scss";

const CompetitionsFilterResults = () => {
  const router = useRouter();
  const date = useDateFilter(router);
  const { data, isLoading } = useScoresByDate(date);

  const filteredData = useMemo(
    () => (data ? matchsFilter({ data, router }) : []),
    [router, data],
  );

  return (
    <div className={styles.content}>
      {isLoading && <div>...Loading</div>}
      {!isLoading && <Matchs data={filteredData} />}
    </div>
  );
};

export default memo(CompetitionsFilterResults);
