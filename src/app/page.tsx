"use client";
import Header from "./container/Header";
import Content from "./container/Content";
import dayjs from "dayjs";
import { AppContext } from "./context";
import { useState } from "react";
import Aside from "./container/Aside";
import styles from "./index.module.scss";
import { MatchStatus } from "./api/types";

export default function Home() {
  const [date, setDate] = useState(dayjs());
  const [teamFilter, setTeamFilter] = useState<string | null>(null);
  const [statusFilter, setStatus] = useState<MatchStatus[] | null>(null);
  const [competitionFilter, setCompetitionFilter] = useState<string | null>(
    null,
  );

  const resetFilters = () => {
    setTeamFilter(null);
    setStatus(null);
    setCompetitionFilter(null);
  };

  return (
    <>
      <Header />
      <AppContext.Provider
        value={{
          date,
          setDate,
          teamFilter,
          setTeamFilter,
          statusFilter,
          setStatus,
          competitionFilter,
          setCompetitionFilter,
          resetFilters,
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
