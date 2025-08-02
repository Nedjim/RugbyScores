"use client";
import { memo, useCallback, useMemo } from "react";
import { useCompetitions, useCurrentSeason } from "@/libs/hooks";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CustomLinks from "../CustomLinks";
import DateTitle from "@/components/DateTitle";
import styles from "./index.module.scss";
import EmptyState from "@/components/EmptyState";

const Competitions = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const season = useCurrentSeason();
  const { data } = useCompetitions();

  const seasonFilter = useMemo(() => {
    const seasonFilter = searchParams.get("season");

    return seasonFilter || season;
  }, [season, searchParams]);

  const title = useMemo(() => {
    return `Competitions - ${seasonFilter}`;
  }, [seasonFilter]);

  const currentCompetitions = useMemo(() => {
    return data.filter((c) => c.season === Number(seasonFilter));
  }, [data, seasonFilter]);

  const handleChangeDate = useCallback(
    (year: number) => {
      router.push(`${pathname}?season=${year}`);
    },
    [pathname, router],
  );

  return (
    <div className={styles.competitions}>
      <DateTitle
        title={title}
        onPrevious={() => {
          const previous = Number(seasonFilter) - 1;
          handleChangeDate(previous);
        }}
        onNext={() => {
          const next = Number(seasonFilter) + 1;
          handleChangeDate(next);
        }}
      />
      {!currentCompetitions.length ? (
        <EmptyState />
      ) : (
        <CustomLinks links={currentCompetitions} />
      )}
    </div>
  );
};

export default memo(Competitions);
