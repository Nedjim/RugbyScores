import { memo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./index.module.scss";
import { ScoreButton } from "../ScoreButton";
import { MatchDetails } from "../../types";
import { getIconsByStatus } from "@/app/helpers";
import Score from "../Score";

type ScoreCardType = { result: MatchDetails };

const ScoreCard = (props: ScoreCardType) => {
  const { result } = props;

  const {
    comp_name: competionName,
    season,
    home,
    away,
    venue,
    home_score: homeScore,
    away_score: awayScore,
    status,
  } = result;

  const [showScore, setShowScore] = useState(false);

  return (
    <div className={styles.scoreCard}>
      <div className={styles.main}>
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
          <div className={styles.score}>
            <ScoreButton
              label={showScore ? "hide result" : "show result"}
              disabled={showScore}
              onClick={() => {
                console.log("hehe");
                setShowScore(!showScore);
              }}
            />
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <span>{venue}</span>
      </div>
    </div>
  );
};

export default memo(ScoreCard);
