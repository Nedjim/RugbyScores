import { memo, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Match, ScoresByDateHookResponse } from "@/app/types";
import MatchCard from "../MatchCard";

import styles from "./index.module.scss";
import { getQueryStringFilter } from "@/utils";

const Matchs = (props: { data: Match[] }) => {
  const { data } = props;
  const searchParams = useSearchParams();

  const filteredData = useMemo(() => {
    const params = new URLSearchParams(searchParams?.toString());
    const competitionFilter = getQueryStringFilter(params, "competition");
    const teamFilter = getQueryStringFilter(params, "team");
    const statusFilter = getQueryStringFilter(params, "status");

    if (teamFilter || competitionFilter || statusFilter) {
      return data.filter((match) => {
        let tmpTeam = true;
        let tmpComp = true;
        let tmpStatus = true;

        if (teamFilter) {
          tmpTeam =
            match.home.includes(teamFilter) || match.away.includes(teamFilter);
        }

        if (competitionFilter) {
          tmpComp = match.comp_name.includes(competitionFilter);
        }

        if (statusFilter?.length) {
          tmpStatus = statusFilter.includes(match.status);
        }

        return tmpTeam && tmpComp && tmpStatus;
      });
    }
    return data;
  }, [searchParams, data]);

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
        <div className={styles.empty}>Please, select a date...</div>
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
