import { memo } from "react";
import Aside from "../Aside";

import styles from "./index.module.scss";
import { mock } from "@/app/api/mock";
import ScoreCard from "@/app/components/ScoreCard";

const Content = () => {
  // const { data, error, isLoading } = useSWR('scores-by-date', getScoresByDate)

  const { data } = mock;

  // if (isLoading) {
  //   return 'Loading ...';
  // }

  // if (error) {
  //   return 'Error';
  // }

  return (
    <div className={styles.content}>
      <Aside />
      <div className={styles.results}>
        {data.results.map((result, key) => {
          return <ScoreCard key={key} result={result} />;
        })}
      </div>
    </div>
  );
};

export default memo(Content);
