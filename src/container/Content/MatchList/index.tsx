import { memo, useContext, useMemo } from "react";
import { Match } from "@/app/types";
import { useScoresByDate } from "@/app/hooks";
import MatchCard from "../MatchCard";
import AppContext from "@/pages/context";

import styles from "./index.module.scss";

const MatchList = () => {
  const { date } = useContext(AppContext);
  const { data, status, isError, isLoading, isSuccess } = useScoresByDate(date);

  return (
    <>
      {!date && <div className={styles.empty}>Please, select a date...</div>}
      {date && isLoading && status === "loading" && (
        <div className={styles.loading}>Loading ...</div>
      )}
      {date && isError && status === "error" && (
        <div className={styles.error}>An error occured, please retry.</div>
      )}
      {date && isSuccess && status === "success" && data && (
        <Matchs data={data} />
      )}
    </>
  );
};

const Matchs = (props: { data: Match[] }) => {
  const { data } = props;
  const { teamFilter, competitionFilter, statusFilter } =
    useContext(AppContext);

  const filteredData = useMemo(() => {
    if (teamFilter || competitionFilter || statusFilter) {
      return data.filter((match) => {
        let tmpTeam = true;
        let tmpComp = true;
        let tmpStatus = true;

        if (teamFilter) {
          tmpTeam =
            match.home.toLowerCase().includes(teamFilter.toLowerCase()) ||
            match.away.toLowerCase().includes(teamFilter.toLowerCase());
        }

        if (competitionFilter) {
          tmpComp = match.comp_name
            .toLowerCase()
            .includes(competitionFilter.toLowerCase());
        }

        if (statusFilter?.length) {
          tmpStatus = statusFilter.includes(match.status);
        }

        return tmpTeam && tmpComp && tmpStatus;
      });
    }
    return data;
  }, [teamFilter, competitionFilter, statusFilter, data]);

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

export default memo(MatchList);
