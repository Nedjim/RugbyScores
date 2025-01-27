"use client";
import { memo } from "react";
import { SWRConfig } from "swr";
import { Roboto } from "next/font/google";
import MatchList from "./MatchList";
import Tags from "./Tags";
import styles from "./index.module.scss";

const roboto = Roboto({
  weight: "300",
  display: "swap",
  subsets: ["latin"],
});

const Content = () => {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <div className={`${styles.content} ${roboto.className}`}>
        <Tags />
        <MatchList />
      </div>
    </SWRConfig>
  );
};

export default memo(Content);
