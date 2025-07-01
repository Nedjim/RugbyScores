import dayjs, { Dayjs } from "dayjs";
import {
  getCompetitions,
  getMatch,
  getMatchesByDate,
  getTeamInfo,
  getTeamsByCompetitionSeason,
} from "./routes";
import { skipToken, useQuery } from "@tanstack/react-query";
import { getQueryDateFilter } from "../utils";
import { ParamValue } from "next/dist/server/request/params";

export const useCurrentSeason = () => {
  return dayjs(new Date()).year();
};

export const useDateFilter = (date?: string | null) => {
  const now = dayjs();

  if (!date || date == null) {
    return now;
  }

  const filter = getQueryDateFilter(date);

  return filter;
};

export const useMatchesByDate = (date: Dayjs, enabled?: boolean) => {
  return useQuery({
    queryKey: ["matches-by-date", String(date)],
    queryFn: () => getMatchesByDate(date),
    enabled,
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
  season: string | null,
  competionId: string | null,
) => {
  return useQuery({
    queryKey: ["teams", "competition", competionId, season],
    queryFn:
      competionId && season
        ? () => getTeamsByCompetitionSeason(competionId, season)
        : skipToken,
  });
};

export const useTeam = (id: ParamValue) => {
  return useQuery({
    queryKey: ["team", id],
    queryFn: id ? () => getTeamInfo(id as string) : skipToken,
  });
};
