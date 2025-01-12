import { Dayjs } from "dayjs";
import { createContext } from "react";

type DefaultContextValue = { date?: Dayjs; setDate?: (date: Dayjs) => void };

const defaultValue: DefaultContextValue = {
  'date': undefined,
  'setDate': undefined
}

export const AppContext = createContext(defaultValue);
