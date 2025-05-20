import { Dayjs } from "dayjs";
import {
  getCompetitions,
  getMatch,
  getScoresByDate,
  getTeamsByCompetitionSeason,
} from "./routes";
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

export const useCompetitions = () => {
  return useQuery({
    queryKey: ["competitions"],
    queryFn: () => getCompetitions(),
  });
};

export const useTeamsByCompetitionSeason = (
  competionId: number,
  season: number,
) => {
  return useQuery({
    queryKey: ["teams", "competition", competionId, season],
    queryFn: () => getTeamsByCompetitionSeason(competionId, season),
  });
};
