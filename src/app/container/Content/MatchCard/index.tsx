"use client";
import dayjs from "dayjs";
import { memo, useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import { Match } from "@/app/libs/types";
import Score from "@/app/components/Score";
import ActionButton from "@/app/components/ActionButton";
import GameModal from "../GameModal";

import styles from "./index.module.scss";

const MatchCard = (props: { match: Match }) => {
  const { match } = props;
  const [shouldDisplayScores, showScores] = useState(false);
  const [shouldDisplayCompositions, showCompositions] = useState(false);

  const {
    id,
    home,
    away,
    venue,
    home_score: homeScore,
    away_score: awayScore,
  } = match;

  const handleShowResults = useCallback(() => {
    showScores(!shouldDisplayScores);
  }, [shouldDisplayScores]);

  const handleShowCompositions = useCallback(() => {
    showCompositions(!shouldDisplayCompositions);
  }, [shouldDisplayCompositions]);

  const handleCloseCompositions = useCallback(() => {
    showCompositions(false);
  }, []);

  return (
    <div className={styles.card}>
      <MatchCardHeader match={match} />
      <div className={styles.body}>
        <div className={styles.team}>
          <span>{home}</span>
          <Score
            value={homeScore}
            success={homeScore > awayScore}
            isHidden={!shouldDisplayScores}
          />
        </div>
        <div className={styles.team}>
          <span>{away}</span>
          <Score
            value={awayScore}
            success={awayScore > homeScore}
            isHidden={!shouldDisplayScores}
          />
        </div>
        <div className={styles.actions}>
          <ActionButton
            type="result"
            disabled={shouldDisplayScores}
            onClick={handleShowResults}
          />
          <ActionButton type="compositions" onClick={handleShowCompositions} />
        </div>
      </div>
      <MatchCardFooter venue={venue} />
      {shouldDisplayCompositions && (
        <GameModal
          isOpen={shouldDisplayCompositions}
          id={id}
          onClose={handleCloseCompositions}
        />
      )}
    </div>
  );
};

const MatchCardHeader = memo(function MatchCardHeader(props: { match: Match }) {
  const { match } = props;
  const { comp_name: competionName, season, status, date } = match;
  const isScoreAvailable = status === "Result";

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div className={styles.compName}>{competionName}</div>
        <div className={styles.season}>{season}</div>
      </div>
      <div className={styles.right}>
        <span>{dayjs(date).format("HH:mm")}</span>
        {isScoreAvailable && <FontAwesomeIcon icon={faCircleCheck} />}
      </div>
    </div>
  );
});

const MatchCardFooter = memo(function MatchCardFooter(props: {
  venue: string;
}) {
  const { venue } = props;

  return (
    <div className={styles.footer}>
      <FontAwesomeIcon icon={faLocationDot} />
      <span className={styles.stadium}>{venue}</span>
    </div>
  );
});

export default memo(MatchCard);
