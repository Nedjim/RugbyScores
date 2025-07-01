"use client";
import { memo } from "react";
import MatchCard from "./MatchCard";
import { Match } from "@/libs/types";
import styles from "./index.module.scss";

const Matches = (props: { data: Match[] }) => {
  const { data } = props;

  return (
    <div className={styles.matchList}>
      {!data.length && (
        <div className={styles.emptyData}>
          Sorry, no matchs found...please change your filters.
        </div>
      )}
      {data.map((match, key) => {
        return <MatchCard key={key} match={match} />;
      })}
    </div>
  );
};

export default memo(Matches);
