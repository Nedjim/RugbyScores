"use client"
import { memo, useContext } from "react";

import Aside from "../Aside";
import useSWR from "swr";
import styles from "./index.module.scss";
import ScoreCard from "@/app/components/ScoreCard";
import { getScoresByDate } from "@/app/api/routes";
import { AppContext } from "@/app/context";
import { Dayjs } from "dayjs";

const fetcher = (date?: Dayjs) => date && getScoresByDate(date);

const Content = () => {
  const context = useContext(AppContext);
  const { date } = context;

  const { data, error, isLoading } = useSWR(date,  fetcher)

  if (isLoading) {
    return 'Loading ...';
  }

  if (error) {
    return 'Error';
  }

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
