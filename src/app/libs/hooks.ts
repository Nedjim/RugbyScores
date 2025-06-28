import dayjs, { Dayjs } from "dayjs";
import {
  getCompetitions,
  getMatch,
  getScoresByDate,
  getTeamInfo,
  getTeamsByCompetitionSeason,
} from "./routes";
import { skipToken, useQuery } from "@tanstack/react-query";
import { NextRouter } from "next/router";
import { getQueryDateFilter } from "../utils";

export const useCurrentSeason = () => {
  return dayjs(new Date()).year();
};

export const useDateFilter = (router: NextRouter) => {
  const { date } = router.query;
  const now = dayjs();

  if (!date) {
    return now;
  }

  const filter = getQueryDateFilter(date as string);

  return filter ? dayjs(filter) : now;
};

export const useScoresByDate = (date: Dayjs, enabled?: boolean) => {
  const queryKey = date ? ["scores-by-date", String(date)] : [];

  return useQuery({
    queryKey,
    queryFn: date ? () => getScoresByDate(date) : skipToken,
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
  season: string,
  competionId?: string,
) => {
  return useQuery({
    queryKey: ["teams", "competition", competionId, season],
    queryFn: competionId
      ? () => getTeamsByCompetitionSeason(competionId, season)
      : skipToken,
  });
};

export const useTeam = (id: string) => {
  return useQuery({
    queryKey: ["team", id],
    queryFn: id ? () => getTeamInfo(id) : skipToken,
  });
};
