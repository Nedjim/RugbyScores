"use client";
import { memo } from "react";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTeamsByCompetitionSeason } from "@/libs/hooks";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import CustomLinks from "../CustomLinks";
import styles from "./index.module.scss";

const Competition = () => {
  const searchParams = useSearchParams();
  const params = useParams();
  const compId = params.compId as string;
  const season = searchParams.get("season") as string;

  const { data } = useTeamsByCompetitionSeason(season, compId);

  return (
    <div className={styles.competition}>
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
      <CustomLinks links={data} />
    </div>
  );
};

export default memo(Competition);
