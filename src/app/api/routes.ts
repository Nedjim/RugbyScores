import axios from "axios";
import dayjs, { Dayjs } from "dayjs";
import { mock } from "./mock";
import { ScoresByDateResponse } from "./types";

const API_URL = "https://rugby-live-data.p.rapidapi.com";
const API_DATE_FORMAT = 'YYYY-MM-DD';
const HEADERS = {
  "x-rapidapi-key": "10d3d95232mshf07d6c711a45b57p1756a4jsn12fb112a270f",
  "x-rapidapi-host": "rugby-live-data.p.rapidapi.com",
};

export async function getScoresByDate(date: Dayjs) {
  const type = "fixtures-by-date";
  const formattedDate = dayjs(date).format(API_DATE_FORMAT);

  const options = {
    method: "GET",
    url: `${API_URL}/${type}/${formattedDate}`,
    headers: HEADERS,
  };

  const response = await axios.request<ScoresByDateResponse>(options);

  // return response.data.results;
  return mock.results;
}
