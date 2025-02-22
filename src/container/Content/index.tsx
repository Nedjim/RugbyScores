import { memo } from "react";
import { roboto } from "@/utils";
import { ScoresByDateHookResponse } from "@/app/types";
import MatchList from "./MatchList";
import Tags from "./Tags";

import styles from "./index.module.scss";

const Content = (props: { data: ScoresByDateHookResponse }) => {
  const { data } = props;

  return (
    <div className={`${styles.content} ${roboto.className}`}>
      <Tags />
      <MatchList data={data} />
    </div>
  );
};

export default memo(Content);
