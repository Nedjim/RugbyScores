import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons/faHourglassEnd";
import { faHourglassStart } from "@fortawesome/free-solid-svg-icons/faHourglassStart";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons/faHourglassHalf";
import { faHourglass } from "@fortawesome/free-solid-svg-icons/faHourglass";
import { MatchStatus } from "../api/types";
import { Roboto } from "next/font/google";

export const DATE_FORMAT = "DD/MM/YYYY";

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

export const roboto = Roboto({
  weight: "300",
  display: "swap",
  subsets: ["latin"],
});
