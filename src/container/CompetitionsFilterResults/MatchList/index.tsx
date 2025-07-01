"use client";
import { memo, useMemo } from "react";
import { matchesFilter } from "@/utils/filters";
import { Match, ScoresByDateHookResponse } from "@/libs/types";
import { useSearchParams } from "next/navigation";
import MatchCard from "@/container/Matches/MatchCard";
import styles from "./index.module.scss";

const Matchs = (props: { data: Match[] }) => {
  const { data } = props;
  const searchParams = useSearchParams();

  const filteredData = useMemo(
    () => matchesFilter({ data, searchParams }),
    [searchParams, data],
  );

  return (
    <div className={styles.matchList}>
      {!filteredData.length && (
        <div className={styles.emptyData}>
          Sorry, no matchs found...please change your filters.
        </div>
      )}
      {filteredData.map((match, key) => {
        return <MatchCard key={key} match={match} />;
      })}
    </div>
  );
};

const MatchList = (props: { data: ScoresByDateHookResponse }) => {
  const { data } = props;
  const { data: matchsData, status, isSuccess } = data;

  return (
    <>
      {!matchsData && (
        <div className={styles.empty}>
          Please, select an other date or change your filters to have more
          results.
        </div>
      )}
      {matchsData && isSuccess && status === "success" && data && (
        <Matchs data={matchsData} />
      )}
    </>
  );
};

export default memo(MatchList);
