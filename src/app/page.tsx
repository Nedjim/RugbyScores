"use client";
import useSWR from "swr";
import { getScoresByDate } from "./api/routes";
import { mock } from "./api/mock";
import ScoreCard from "./components/ScoreCard";
import styles from "./page.module.scss";
import Header from "./components/Header";

export default function Home() {
  // const { data, error, isLoading } = useSWR('scores-by-date', getScoresByDate)

  const { data } = mock;

  // if (isLoading) {
  //   return 'Loading ...';
  // }

  // if (error) {
  //   return 'Error';
  // }

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        {data.results.map((result, key) => {
          return <ScoreCard key={key} result={result} />;
        })}
      </div>
    </div>
  );
}
