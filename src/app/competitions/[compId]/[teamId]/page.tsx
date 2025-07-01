"use client";
import dayjs from "dayjs";
import { memo, useMemo } from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTeam } from "@/libs/hooks";
import Link from "next/link";
import Matches from "@/container/Matches";
import styles from "../../index.module.scss";

function TeamPage() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const compIdParam = params.compId;
  const teamIdParam = params.teamId;
  const seasonFilter = searchParams.get("season");
  const { data, isLoading } = useTeam(teamIdParam);

  const filteredData = useMemo(() => {
    if (!data) {
      return [];
    }

    return data
      .filter((i) => {
        const { date, comp_id } = i;
        const season = dayjs(date).year();
        return (
          String(season) === seasonFilter && String(comp_id) === compIdParam
        );
      })
      .reverse();
  }, [data, seasonFilter, compIdParam]);

  if (isLoading) {
    return <div>...Loading</div>;
  }

  if (!filteredData.length) {
    router.push(`/competitions/${compIdParam}?season=${seasonFilter}`);
  }

  return (
    <div className={styles.competitions}>
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
}

export default memo(TeamPage);
