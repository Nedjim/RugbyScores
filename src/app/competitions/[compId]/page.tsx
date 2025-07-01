"use client";
import { memo } from "react";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTeamsByCompetitionSeason } from "@/libs/hooks";
import { useSearchParams, useParams } from "next/navigation";
import CustomLinks from "@/container/CustomLinks";
import Link from "next/link";
import styles from "../index.module.scss";

function CompetitionPage() {
  const searchParams = useSearchParams();
  const params = useParams();
  const compId = params.compId as string;
  const season = searchParams.get("season");
  const { data } = useTeamsByCompetitionSeason(season, compId);

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

export default memo(CompetitionPage);
