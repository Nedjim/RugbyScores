import { memo } from "react";
import { roboto } from "@/app/utils";
import { ScoresByDateHookResponse } from "@/app/libs/types";
import MatchList from "./MatchList";
import styles from "./index.module.scss";

const Content = (props: { data: ScoresByDateHookResponse }) => {
  const { data } = props;

  return (
    <div className={`${styles.content} ${roboto.className}`}>
      <MatchList data={data} />
    </div>
  );
};

export default memo(Content);
