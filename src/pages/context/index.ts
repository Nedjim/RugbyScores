import { Dayjs } from "dayjs";
import { createContext } from "react";
import { MatchStatus } from "../api/types";

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

export const AppContext = createContext(defaultValue);
