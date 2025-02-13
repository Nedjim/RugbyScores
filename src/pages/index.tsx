"use client";
import { Dayjs } from "dayjs";
import { useState } from "react";
import { MatchStatus } from "@/app/types";
import { AppContext } from "./context";
import Header from "@/container/Header";
import Aside from "@/container/Aside";
import Content from "@/container/Content";

import styles from "./index.module.scss";

export default function Home() {
  const [date, setDate] = useState<Dayjs | null>(null);
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
    <div className={styles.pageWrapper}>
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
    </div>
  );
}
