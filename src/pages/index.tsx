"use client";
import "normalize.css/normalize.css";
import { Dayjs } from "dayjs";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MatchStatus } from "@/app/types";
import { AppContext } from "./context";
import Header from "@/container/Header";
import Aside from "@/container/Aside";
import Content from "@/container/Content";

import styles from "./index.module.scss";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 86400000, // 1 day
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

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
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
