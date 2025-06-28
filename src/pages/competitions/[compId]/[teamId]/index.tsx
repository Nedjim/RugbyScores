"use client";
import dayjs from "dayjs";
import { memo, useMemo } from "react";
import { useRouter } from "next/router";
import { useTeam } from "@/app/libs/hooks";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Matchs from "@/app/container/Matchs";
import styles from "../../index.module.scss";

function TeamInfo() {
  const router = useRouter();
  const { teamId, compId: compIdFilter, season: seasonFilter } = router.query;
  const { data, isLoading } = useTeam(teamId as string);

  const filteredData = useMemo(() => {
    if (!data) {
      return [];
    }

    return data
      .filter((i) => {
        const { date, comp_id } = i;
        const season = dayjs(date).year();
        return (
          String(season) === seasonFilter && String(comp_id) === compIdFilter
        );
      })
      .reverse();
  }, [data, seasonFilter, compIdFilter]);

  if (isLoading) {
    return <div>...Loading</div>;
  }

  if (!filteredData.length) {
    router.push({
      pathname: `/competitions/${compIdFilter}`,
      query: { season: seasonFilter },
    });
  }

  return (
    <div className={styles.competitions}>
      <Link
        href={{
          pathname: `/competitions/${compIdFilter}`,
          query: { season: seasonFilter },
        }}
        className={styles.backLink}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
        <span>All teams</span>
      </Link>
      <Matchs data={filteredData} />
    </div>
  );
}

export default memo(TeamInfo);
