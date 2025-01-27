import { Dayjs } from "dayjs";
import useSWR from "swr";
import { getMatch, getScoresByDate } from "./routes";

const SWR_OPTIONS = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};

export const useScoresByDate = (date: Dayjs | null) => {
  return useSWR(
    date,
    date ? (date: Dayjs) => getScoresByDate(date) : null,
    SWR_OPTIONS,
  );
};

export const useMatch = (id: number) => {
  return useSWR(`match-${id}`, () => getMatch(id), SWR_OPTIONS);
};
