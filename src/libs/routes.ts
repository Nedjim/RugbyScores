import dayjs, { Dayjs } from "dayjs";
import {
  MatchResponse,
  ScoresByDateResponse,
  CompetitionsResponse,
  TeamsByCompetitionSeasonResponse,
  GetTeamInfoResponse,
} from "./types";
import fetchData from "./fetchData";

const API_DATE_FORMAT = "YYYY-MM-DD";

export async function getMatchesByDate(date: Dayjs) {
  const formattedDate = dayjs(date).format(API_DATE_FORMAT);
  const url = `fixtures-by-date/${formattedDate}`;
  const response = await fetchData<ScoresByDateResponse>(url);

  return response.results || [];
}

export async function getMatch(id: number) {
  const url = `match/${id}`;
  const response = await fetchData<MatchResponse>(url);

  return response.results;
}

export async function getCompetitions() {
  const url = "competitions";
  const response = await fetchData<CompetitionsResponse>(url);

  return response.results || [];
}

export async function getTeamsByCompetitionSeason(
  competionId: string,
  season: string,
) {
  const url = `teams/${competionId}/${season}`;
  const response = await fetchData<TeamsByCompetitionSeasonResponse>(url);

  return response.results || [];
}

export async function getTeamInfo(id: string) {
  const url = `fixtures-results-by-team/${id}`;
  const response = await fetchData<GetTeamInfoResponse>(url);

  return response.results || [];
}
