"use client";
import { memo } from "react";
import { Match } from "@/app/libs/types";
import MatchCard from "./MatchCard";
import styles from "./index.module.scss";

const Matchs = (props: { data: Match[] }) => {
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

export default memo(Matchs);
