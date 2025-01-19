import axios from "axios";
import dayjs, { Dayjs } from "dayjs";
import { MatchResponse, ScoresByDateResponse } from "./types";
import { mock } from "./mock";

const API_URL = "https://rugby-live-data.p.rapidapi.com";
const API_DATE_FORMAT = 'YYYY-MM-DD';

const HEADERS = {
  "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY,
  "x-rapidapi-host": process.env.NEXT_PUBLIC_API_HOST,
};

export async function getScoresByDate(date: Dayjs) {
  const formattedDate = dayjs(date).format(API_DATE_FORMAT);

  const options = {
    method: "GET",
    url: `${API_URL}/fixtures-by-date/${formattedDate}`,
    headers: HEADERS,
  };

  const response = await axios.request<ScoresByDateResponse>(options);

  return mock.results; //response.data.results;
}

export async function getMatch(id: number) {
  const options = {
    method: "GET",
    url: `${API_URL}/match/${id}`,
    headers: HEADERS,
  };

  const response = await axios.request<MatchResponse>(options);

  return response.data.results;
}
