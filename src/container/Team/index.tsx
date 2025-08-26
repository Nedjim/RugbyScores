"use client";
import dayjs from "dayjs";
import Link from "next/link";
import { memo, useMemo } from "react";
import { useTeam } from "@/libs/hooks";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useSearchParams } from "next/navigation";
import Matches from "../MatchList";
import styles from "./index.module.scss";

const Team = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const compIdParam = params.compId;
  const teamIdParam = params.teamId as string;
  const seasonFilter = searchParams.get("season");
  const { data } = useTeam(teamIdParam);

  const filteredData = useMemo(() => {
    return data
      .filter((i) => {
        const { date, comp_id } = i;
        const season = dayjs(date).year();
        return (
          String(season) === seasonFilter && String(comp_id) === compIdParam
        );
      })
      .sort((a, b) => {
        const dateA = dayjs(a.date);
        const dateB = dayjs(b.date);

        if (dateA.isBefore(dateB)) {
          return -1;
        }
        if (dateA.isAfter(dateB)) {
          return 1;
        }

        return 0;
      });
  }, [data, seasonFilter, compIdParam]);

  return (
    <div className={styles.team}>
      <Link
        href={{
          pathname: `/competitions/${compIdParam}`,
          query: { season: seasonFilter },
        }}
        className={styles.backLink}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
        <span>All teams</span>
      </Link>
      <Matches data={filteredData} />
    </div>
  );
};

export default memo(Team);
