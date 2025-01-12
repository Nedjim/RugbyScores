import { Dayjs } from "dayjs";
import { createContext } from "react";

type DefaultContextValue = {
  date?: Dayjs;
  setDate?: (date: Dayjs) => void;
  teamFilter: string | null;
  setTeamFilter?: (value: string) => void;
  competitionFilter: string | null;
  setCompetitionFilter?: (value: string) => void;
};

const defaultValue: DefaultContextValue = {
  date: undefined,
  setDate: undefined,
  teamFilter: null,
  setTeamFilter: undefined,
  competitionFilter: null,
  setCompetitionFilter: undefined
};

export const AppContext = createContext(defaultValue);
