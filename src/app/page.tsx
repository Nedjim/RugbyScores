"use client";
import Header from "./container/Header";
import Content from "./container/Content";
import dayjs from "dayjs";
import { AppContext } from "./context";
import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState(dayjs());
  const [teamFilter, setTeamFilter] = useState<string | null>(null);
  const [competitionFilter, setCompetitionFilter] = useState<string | null>(
    null
  );

  return (
    <div>
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
        <Content />
      </AppContext.Provider>
    </div>
  );
}
