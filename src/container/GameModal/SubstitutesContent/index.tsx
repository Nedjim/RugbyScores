import Substitutes from "@/components/Modal/Substitutes";
import { MatchResponse } from "@/libs/types";
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

export default SubsitutesContent;
