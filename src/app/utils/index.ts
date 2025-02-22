import dayjs from "dayjs";
import { MatchStatus } from "../libs/types";
import { Roboto, Smooch_Sans } from "next/font/google";
import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons/faHourglassEnd";
import { faHourglassStart } from "@fortawesome/free-solid-svg-icons/faHourglassStart";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons/faHourglassHalf";
import { faHourglass } from "@fortawesome/free-solid-svg-icons/faHourglass";

export const roboto = Roboto({
  weight: "300",
  display: "swap",
  subsets: ["latin"],
});

export const smooch = Smooch_Sans({
  weight: "300",
  display: "swap",
  subsets: ["latin"],
});

export const getIconsByStatus = (status: MatchStatus) => {
  switch (status) {
    case "Result":
      return faHourglassEnd;
    case "First Half":
      return faHourglassStart;
    case "Second Half":
      return faHourglassHalf;
    default:
      return faHourglass;
  }
};

export const getQueryDateFilter = (searchParams: URLSearchParams) => {
  const date = searchParams.get("date");

  const [day, month, year] = date?.split("_") || [];

  const formattedDate = dayjs(
    new Date(Number(year), Number(month) - 1, Number(day)),
  );

  return formattedDate;
};

export const getQueryStringFilter = (
  searchParams: URLSearchParams,
  key: string,
) => {
  const query = searchParams.get(key) || "";

  return query.split("_").join(" ");
};

export const getStatusFilter = (searchParams: URLSearchParams) => {
  return searchParams.get("status") || "";
};

export const createQueryStringFilter = (value: string) => {
  return value.split(" ").join("_");
};
