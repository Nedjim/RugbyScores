"use client";
import { memo, useMemo } from "react";
import { useRouter } from "next/router";
import { Match, ScoresByDateHookResponse } from "@/app/libs/types";
import { matchsFilter } from "@/app/utils/filters";
import MatchCard from "../../Matchs/MatchCard";
import styles from "./index.module.scss";

const Matchs = (props: { data: Match[] }) => {
  const { data } = props;
  const router = useRouter();

  const filteredData = useMemo(
    () => matchsFilter({ data, router }),
    [router, data],
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
  const { data: matchsData, status, isLoading, isSuccess } = data;

  return (
    <>
      {!matchsData && (
        <div className={styles.empty}>
          Please, select an other date or change your filters to have more
          results.
        </div>
      )}
      {matchsData && isLoading && status === "loading" && (
        <div className={styles.loading}>Loading ...</div>
      )}
      {matchsData && isSuccess && status === "success" && data && (
        <Matchs data={matchsData} />
      )}
    </>
  );
};

export default memo(MatchList);
