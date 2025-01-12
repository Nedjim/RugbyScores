"use client";
import { memo, useContext } from "react";
import { SWRConfig } from "swr";
import { AppContext } from "@/app/context";
import { useScoresByDate } from "@/app/api/hooks";

import Aside from "../Aside";
import styles from "./index.module.scss";
import Results from "./Results";

const Content = () => {
  const { date } = useContext(AppContext);
  const { data, error, isLoading } = useScoresByDate(date);

  if (isLoading || !data) {
    return "Loading ...";
  }

  if (error) {
    return "Error";
  }

  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <div className={styles.content}>
        <Aside />
        <Results data={data} />
      </div>
    </SWRConfig>
  );
};

export default memo(Content);
