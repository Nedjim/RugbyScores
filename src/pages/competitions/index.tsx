"use client";
import { memo, useMemo } from "react";
import { useRouter } from "next/router";
import { useCompetitions, useCurrentSeason } from "@/app/libs/hooks";
import CustomLinks from "@/app/container/CustomLinks";
import styles from "./index.module.scss";

const CompetitionsPageContent = () => {
  const { data, isLoading } = useCompetitions();
  const router = useRouter();
  const season = useCurrentSeason();

  const seasonFilter = useMemo(() => {
    const { season: seasonFilter } = router.query;

    return seasonFilter || season;
  }, [router, season]);

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

export default memo(CompetitionsPageContent);
