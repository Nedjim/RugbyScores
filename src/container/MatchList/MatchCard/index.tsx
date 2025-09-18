"use client";
import dayjs from "dayjs";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import { Match } from "@/libs/types";
import Score from "@/components/Score";
import ActionButton from "@/components/ActionButton";
import styles from "./index.module.scss";
import GameModal from "../../GameModal";

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

  const handleShowResults = () => {
    showScores(!shouldDisplayScores);
  };

  const handleShowCompositions = () => {
    showCompositions(!shouldDisplayCompositions);
  };

  const handleCloseCompositions = () => {
    showCompositions(false);
  };

  return (
    <div className={styles.card}>
      <MatchCardHeader match={match} />
      <div className={styles.body}>
        <Score
          value={homeScore}
          success={homeScore > awayScore}
          isHidden={!shouldDisplayScores}
          teamName={home}
        />
        <Score
          value={awayScore}
          success={awayScore > homeScore}
          isHidden={!shouldDisplayScores}
          teamName={away}
        />
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

const MatchCardHeader = (props: { match: Match }) => {
  const { match } = props;
  const { comp_name: competionName, status, date } = match;
  const isScoreAvailable = status === "Result";

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div className={styles.compName}>{competionName}</div>
        <div className={styles.season}>{dayjs(date).format("DD/MM/YYYY")}</div>
      </div>
      <div className={styles.right}>
        <span>{dayjs(date).format("HH:mm")}</span>
        {isScoreAvailable && <FontAwesomeIcon icon={faCircleCheck} />}
      </div>
    </div>
  );
};

const MatchCardFooter = (props: { venue: string }) => {
  const { venue } = props;

  return (
    <div className={styles.footer}>
      <FontAwesomeIcon icon={faLocationDot} />
      <span className={styles.stadium}>{venue}</span>
    </div>
  );
};

export default MatchCard;
