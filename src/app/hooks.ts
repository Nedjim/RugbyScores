import { Dayjs } from "dayjs";
import { getMatch, getScoresByDate } from "./routes";
import { useQuery } from "@tanstack/react-query";

export const useScoresByDate = (date: Dayjs | null) => {
  return useQuery({
    queryKey: ["scores-by-date", String(date)],
    queryFn: () => date && getScoresByDate(date),
    enabled: Boolean(date),
  });
};

export const useMatch = (id: number) => {
  return useQuery({ queryKey: ["match", id], queryFn: () => getMatch(id) });
};
