import { Dayjs } from "dayjs";
import { MatchStatus } from "@/app/types";
import { createContext } from "react";

type DefaultContextValue = {
  date: Dayjs | null;
  setDate: (date: Dayjs | null) => void;
  teamFilter: string | null;
  setTeamFilter: (value: string) => void;
  statusFilter?: MatchStatus[] | null;
  setStatus: (value: MatchStatus[] | null) => void;
  competitionFilter: string | null;
  setCompetitionFilter: (value: string) => void;
  resetFilters: () => void;
};

const defaultValue: DefaultContextValue = {
  date: null,
  setDate: () => {},
  teamFilter: null,
  setTeamFilter: () => {},
  statusFilter: null,
  setStatus: () => {},
  competitionFilter: null,
  setCompetitionFilter: () => {},
  resetFilters: () => {},
};

const AppContext = createContext(defaultValue);

export default AppContext;
