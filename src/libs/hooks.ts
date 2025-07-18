import dayjs, { Dayjs } from "dayjs";
import {
  getCompetitions,
  getMatch,
  getMatchesByDate,
  getTeamInfo,
  getTeamsByCompetitionSeason,
} from "./routes";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { getQueryDateFilter } from "../utils";

export const useCurrentSeason = () => {
  return dayjs(new Date()).year();
};

export const getDateFilter = (date?: string | null) => {
  const now = dayjs();

  if (!date || date == null) {
    return now;
  }

  const filter = getQueryDateFilter(date);

  return filter;
};

export const useMatch = (id: number) => {
  return useSuspenseQuery({
    queryKey: ["match", id],
    queryFn: () => getMatch(id),
  });
};

export const useMatchesByDate = (date: Dayjs, enabled?: boolean) => {
  return useQuery({
    queryKey: ["matches-by-date", String(date)],
    queryFn: () => getMatchesByDate(date),
    enabled,
  });
};

export const useCompetitions = () => {
  return useSuspenseQuery({
    queryKey: ["competitions"],
    queryFn: () => getCompetitions(),
  });
};

export const useTeamsByCompetitionSeason = (
  season: string,
  competionId: string,
) => {
  return useSuspenseQuery({
    queryKey: ["teams", "competition", competionId, season],
    queryFn: () => getTeamsByCompetitionSeason(competionId, season),
  });
};

export const useTeam = (id: string) => {
  return useSuspenseQuery({
    queryKey: ["team", id],
    queryFn: () => getTeamInfo(id),
  });
};
