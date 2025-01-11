import axios from "axios";

const API_URL = "https://rugby-live-data.p.rapidapi.com";
const HEADERS = {
  "x-rapidapi-key": "10d3d95232mshf07d6c711a45b57p1756a4jsn12fb112a270f",
  "x-rapidapi-host": "rugby-live-data.p.rapidapi.com",
};

export async function getScoresByDate() {
  const type = "fixtures-by-date";
  const date = "2025-01-10";

  const options = {
    method: 'GET',
    url: `${API_URL}/${type}/${date}`,
    headers: HEADERS
  };
  
  return await axios.request(options);
}
