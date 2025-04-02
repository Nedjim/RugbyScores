import { memo } from "react";
import { ScoresByDateHookResponse } from "@/app/libs/types";
import MatchList from "./MatchList";
import styles from "./index.module.scss";

const Content = (props: { data: ScoresByDateHookResponse }) => {
  const { data } = props;

  return (
    <div className={styles.content}>
      <MatchList data={data} />
    </div>
  );
};

export default memo(Content);
