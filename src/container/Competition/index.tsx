"use client";
import { memo, useMemo } from "react";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTeamsByCompetitionSeason } from "@/libs/hooks";
import { useParams, useSearchParams } from "next/navigation";
import EmptyState from "@/components/EmptyState";
import Link from "next/link";
import CustomLinks from "../CustomLinks";
import styles from "./index.module.scss";

const Competition = () => {
  const searchParams = useSearchParams();
  const params = useParams();
  const compId = params.compId as string;
  const season = searchParams.get("season") as string;

  const { data } = useTeamsByCompetitionSeason(season, compId);

  const sortedDate = useMemo(() => {
    return data.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }

      return 0;
    });
  }, [data]);

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

      {!sortedDate.length ? (
        <EmptyState text="Sorry, teams are not available... " />
      ) : (
        <CustomLinks links={sortedDate} />
      )}
    </div>
  );
};

export default memo(Competition);
