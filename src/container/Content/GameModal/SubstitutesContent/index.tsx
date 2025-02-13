import { MatchResponse } from "@/app/types";
import Substitutes from "@/components/Modal/Substitutes";
import { memo } from "react";

import styles from "./index.module.scss";

const SubsitutesContent = (props: { data: MatchResponse["results"] }) => {
  const { data } = props;

  return (
    <div className={styles.substitutesContent}>
      <Substitutes
        teamsheet={data.home.teamsheet}
        teamName={data.match.home_team}
      />
      <Substitutes
        teamsheet={data.away.teamsheet}
        teamName={data.match.away_team}
      />
    </div>
  );
};

export default memo(SubsitutesContent);
