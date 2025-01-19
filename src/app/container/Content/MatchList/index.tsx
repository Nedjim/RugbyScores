import { memo, useContext, useMemo } from "react";
import { Match } from "@/app/api/types";
import { AppContext } from "@/app/context";
import { useScoresByDate } from "@/app/api/hooks";
import MatchCard from "../MatchCard";
import styles from "./index.module.scss";

const MatchList = () => {
  const { date } = useContext(AppContext);
  const { data, error, isLoading } = useScoresByDate(date);

  return (
    <>
      {isLoading && <div className={styles.loading}>Loading ...</div>}
      {!isLoading && error && <div>Loading ...</div>}
      {!isLoading && !error && data && <Matchs data={data} />}
    </>
  );
};

const Matchs = (props: { data: Match[] }) => {
  const { data } = props;
  const { teamFilter, competitionFilter } = useContext(AppContext);

  const filteredData = useMemo(() => {
    if (teamFilter || competitionFilter) {
      return data.filter((match) => {
        let tmpTeam = true;
        let tmpComp = true;

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
        return tmpTeam && tmpComp;
      });
    }
    return data;
  }, [teamFilter, competitionFilter, data]);

  return (
    <div className={styles.matchList}>
      {!filteredData.length && (
        <div className={styles.emptyData}>
          Sorry, no results at this date...please change your filters.
        </div>
      )}
      {filteredData.map((match, key) => {
        return <MatchCard key={key} match={match} />;
      })}
    </div>
  );
};

export default memo(MatchList);
