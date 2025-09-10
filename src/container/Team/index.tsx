"use client";
import dayjs from "dayjs";
import { memo, useMemo, useState } from "react";
import { useTeam } from "@/libs/hooks";
import { useParams, useSearchParams } from "next/navigation";
import FilterButton from "@/components/FilterButton";
import Matches from "../MatchList";
import BackLink from "@/components/BackLink";
import styles from "./index.module.scss";

const Team = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const compIdParam = params.compId;
  const teamIdParam = params.teamId as string;
  const seasonFilter = searchParams.get("season");
  const { data } = useTeam(teamIdParam);
  const [showNextMatchs, setShowNextMatchs] = useState(true);

  const filteredData = useMemo(() => {
    return data
      .filter((i) => {
        const { season, comp_id } = i;

        return season === seasonFilter && String(comp_id) === compIdParam;
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

  const matchsByStatus = useMemo(() => {
    return filteredData.filter((e) => {
      const isScoreAvailable = e.status === "Result";

      return showNextMatchs ? !isScoreAvailable : isScoreAvailable;
    });
  }, [showNextMatchs, filteredData]);

  return (
    <div className={styles.team}>
      <div className={styles.navigation}>
        <BackLink
          href={{
            pathname: `/competitions/${compIdParam}`,
            query: { season: seasonFilter },
          }}
          label="All teams"
        />
        <div className={styles.buttons}>
          <FilterButton
            label="Incomming"
            onClick={() => setShowNextMatchs(!showNextMatchs)}
            isActive={showNextMatchs}
          />
          <FilterButton
            label="Played"
            onClick={() => setShowNextMatchs(!showNextMatchs)}
            isActive={!showNextMatchs}
          />
        </div>
      </div>
      <Matches data={matchsByStatus} />
    </div>
  );
};

export default memo(Team);
