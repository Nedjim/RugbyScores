"use client";
import { memo } from "react";
import { useRouter } from "next/router";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTeamsByCompetitionSeason } from "@/app/libs/hooks";
import CustomLinks from "@/app/container/CustomLinks";
import Link from "next/link";
import styles from "../index.module.scss";

function CompetitionTeams() {
  const router = useRouter();
  const { compId, season } = router.query;
  const { data, isLoading } = useTeamsByCompetitionSeason(
    season as string,
    compId as string,
  );

  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <div className={styles.competitions}>
      <Link
        href={{
          pathname: "/competitions",
          query: { season },
        }}
        className={styles.backLink}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
        <span>All competitions</span>
      </Link>
      {data?.length ? (
        <CustomLinks links={data} />
      ) : (
        <div className={styles.empty}>
          No results. Please, change your filters.
        </div>
      )}
    </div>
  );
}

export default memo(CompetitionTeams);
