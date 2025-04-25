import { Dayjs } from "dayjs";
import { getMatch, getScoresByDate } from "./routes";
import { skipToken, useQuery } from "@tanstack/react-query";

export const useScoresByDate = (date?: Dayjs) => {
  const queryKey = date ? ["scores-by-date", String(date)] : [];

  return useQuery({
    queryKey,
    queryFn: date ? () => getScoresByDate(date) : skipToken,
  });
};

export const useMatch = (id: number) => {
  return useQuery({ queryKey: ["match", id], queryFn: () => getMatch(id) });
};
