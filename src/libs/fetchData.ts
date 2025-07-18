import axios from "axios";

const API_URL = "https://rugby-live-data.p.rapidapi.com";

const fetchData = async <T>(endpoint: string): Promise<T> => {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY,
      "x-rapidapi-host": process.env.NEXT_PUBLIC_API_HOST,
    },
    url: `${API_URL}/${endpoint}`,
  };

  const response = await axios.request(options);
  return response.data;
};

export default fetchData;
