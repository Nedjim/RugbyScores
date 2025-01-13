import { memo, useContext, useMemo } from "react";
import { Match } from "@/app/api/types";
import { AppContext } from "@/app/context";
import MatchCard from "../MatchCard";
import styles from "./index.module.scss";

const MatchList = (props: { data: Match[] }) => {
  const { data } = props;
  const { teamFilter, competitionFilter} = useContext(AppContext);

  const filteredData = useMemo(() => {
    if (teamFilter || competitionFilter) {
      return data.filter((match) => {
        let tmpTeam = true;
        let tmpComp = true;

        if (teamFilter) {
          tmpTeam = match.home.toLowerCase().includes(teamFilter.toLowerCase()) ||
          match.away.toLowerCase().includes(teamFilter.toLowerCase())
        }
        if (competitionFilter) {
          tmpComp = match.comp_name.toLowerCase().includes(competitionFilter.toLowerCase())
        }
        return tmpTeam && tmpComp;
      });
    }
    return data;
  }, [teamFilter,competitionFilter, data]);

  if (!filteredData.length) {
    return (
      <div>Sorry, no results at this date...please change your filters.</div>
    );
  }

  return (
    <div className={styles.matchList}>
      {filteredData.map((match, key) => {
        return <MatchCard key={key} match={match} />;
      })}
    </div>
  );
};

export default memo(MatchList);
