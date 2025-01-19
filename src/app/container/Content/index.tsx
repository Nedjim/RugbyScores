"use client";
import { memo } from "react";
import { SWRConfig } from "swr";
import MatchList from "./MatchList";
import Tags from "./Tags";
import styles from "./index.module.scss";

const Content = () => {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <div className={styles.content}>
        <Tags />
        <MatchList />
      </div>
    </SWRConfig>
  );
};

export default memo(Content);
