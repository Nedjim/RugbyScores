"use client";
import Header from "./container/Header";
import Content from "./container/Content";
import dayjs from "dayjs";
import { AppContext } from "./context";
import { useState } from "react";
import Aside from "./container/Aside";
import styles from "./index.module.scss";

export default function Home() {
  const [date, setDate] = useState(dayjs());
  const [teamFilter, setTeamFilter] = useState<string | null>(null);
  const [competitionFilter, setCompetitionFilter] = useState<string | null>(
    null
  );

  return (
    <>
      <Header />
      <AppContext.Provider
        value={{
          date,
          setDate,
          teamFilter,
          setTeamFilter,
          competitionFilter,
          setCompetitionFilter,
        }}
      >
        <div className={styles.page}>
          <Aside />
          <Content />
        </div>
      </AppContext.Provider>
    </>
  );
}
