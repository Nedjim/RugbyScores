"use client";
import { memo, useMemo } from "react";
import { useCompetitions, useCurrentSeason } from "@/libs/hooks";
import { useSearchParams } from "next/navigation";
import CustomLinks from "../CustomLinks";
import styles from "./index.module.scss";

const Competitions = () => {
  const searchParams = useSearchParams();
  const season = useCurrentSeason();
  const { data } = useCompetitions();

  const seasonFilter = useMemo(() => {
    const seasonFilter = searchParams.get("season");

    return seasonFilter || season;
  }, [season, searchParams]);

  const currentCompetitions = useMemo(() => {
    return data.filter((c) => c.season === Number(seasonFilter));
  }, [data, seasonFilter]);

  return (
    <div className={styles.competitions}>
      <h2 className={styles.defaultTitle}>Competitions - {seasonFilter}</h2>
      <CustomLinks links={currentCompetitions} />
    </div>
  );
};

export default memo(Competitions);
