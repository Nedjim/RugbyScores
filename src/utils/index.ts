import dayjs from "dayjs";
import { Roboto, Smooch_Sans } from "next/font/google";

export const URL_DATA_FILTER_FORMAT = "DD-MM-YYYY";

export const roboto = Roboto({
  weight: "300",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const smooch = Smooch_Sans({
  weight: "300",
  display: "swap",
  subsets: ["latin"],
});

export const getQueryDateFilter = (date: string) => {
  const [day, month, year] = date?.split("-") || [];

  const formattedDate = dayjs(
    new Date(Number(year), Number(month) - 1, Number(day)),
  );

  return formattedDate;
};

export const getQueryStringFilter = (value: string | null) => {
  if (value === null) {
    return "";
  }
  return value.split("_").join(" ");
};

export const createQueryStringFilter = (value: string) => {
  return value.split(" ").join("_");
};
