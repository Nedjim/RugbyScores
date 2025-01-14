"use client";
import { memo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIconsByStatus } from "@/app/helpers";
import { Match } from "@/app/api/types";
import { ActionButton } from "@/app/components/ActionButton";
import Score from "@/app/components/Score";
import styles from "./index.module.scss";
import MatchModal from "@/app/components/MatchModal";

type MatchCardType = { match: Match };

const MatchCard = (props: MatchCardType) => {
  const { match } = props;

  const {
    id,
    comp_name: competionName,
    season,
    home,
    away,
    venue,
    home_score: homeScore,
    away_score: awayScore,
    status,
  } = match;

  const [showScore, setShowScore] = useState(false);
  const [showCompositions, setShowCompositions] = useState(false);

  console.log({ showCompositions });
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div>{competionName}</div>
          <div className={styles.season}>{season}</div>
        </div>
        <FontAwesomeIcon icon={getIconsByStatus(status)} />
      </div>
      <div className={styles.body}>
        <div className={styles.team}>
          <span>{home}</span>
          <Score
            value={homeScore}
            success={homeScore > awayScore}
            isHidden={!showScore}
          />
        </div>
        <div className={styles.team}>
          <span>{away}</span>
          <Score
            value={awayScore}
            success={awayScore > homeScore}
            isHidden={!showScore}
          />
        </div>
        <div className={styles.actions}>
          <ActionButton
            label={showScore ? "hide result" : "show result"}
            disabled={showScore}
            onClick={() => {
              setShowScore(!showScore);
            }}
          />
          <ActionButton
            label="show compositions"
            disabled={showCompositions}
            onClick={() => {
              setShowCompositions(!showCompositions);
            }}
          />
        </div>
      </div>
      <div className={styles.footer}>
        <span>{venue}</span>
      </div>
      {showCompositions && (
        <MatchModal
          isOpen={showCompositions}
          onClose={() => setShowCompositions(false)}
          id={id}
          away={away}
          home={home}
        />
      )}
    </div>
  );
};

export default memo(MatchCard);
