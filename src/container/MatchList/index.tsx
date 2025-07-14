import { memo } from "react";
import MatchCard from "./MatchCard";
import { Match } from "@/libs/types";
import styles from "./index.module.scss";

const Matches = (props: { data: Match[] }) => {
  const { data } = props;

  return (
    <div className={styles.matchList}>
      {data.map((match, key) => {
        return <MatchCard key={key} match={match} />;
      })}
    </div>
  );
};

export default memo(Matches);
