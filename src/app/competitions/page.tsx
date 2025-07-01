"use client";
import { memo, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useCompetitions, useCurrentSeason } from "@/libs/hooks";
import CustomLinks from "@/container/CustomLinks";
import styles from "./index.module.scss";

const CompetitionsPage = () => {
  const { data, isLoading } = useCompetitions();
  const searchParams = useSearchParams();
  const season = useCurrentSeason();

  const seasonFilter = useMemo(() => {
    const seasonFilter = searchParams.get("season");

    return seasonFilter || season;
  }, [season, searchParams]);

  const currentCompetitions = useMemo(() => {
    if (!data) {
      return [];
    }
    return data.filter((c) => c.season === Number(seasonFilter));
  }, [data, seasonFilter]);

  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <div className={styles.competitions}>
      <h2 className={styles.defaultTitle}>Competitions - {seasonFilter}</h2>
      <CustomLinks links={currentCompetitions} />
    </div>
  );
};

export default memo(CompetitionsPage);
