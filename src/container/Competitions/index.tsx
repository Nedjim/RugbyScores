"use client";
import dayjs, { Dayjs } from "dayjs";
import { memo, useCallback, useMemo } from "react";
import { useCompetitions, useCurrentSeason } from "@/libs/hooks";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import CustomLinks from "../CustomLinks";
import DateTitle from "@/container/DateTitle";
import EmptyState from "@/components/EmptyState";
import styles from "./index.module.scss";

const MIN_YEAR = "2000-01-01";

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

  const datePickerConfig: DatePickerProps = useMemo(() => {
    const seasonFilter = searchParams.get("season");
    const value = dayjs().year(Number(seasonFilter) || season);
    const minYear = dayjs(new Date(MIN_YEAR));
    const maxYear = dayjs().add(1, "year");

    return {
      value,
      yearsOrder: "desc",
      views: ["year"],
      minDate: minYear,
      maxDate: maxYear,
      onChange: (value: Dayjs | null) => {
        if (!value) {
          router.push(pathname);
          return;
        }
        const season = String(dayjs(value).format("YYYY"));
        router.push(`${pathname}?season=${season}`);
      },
    };
  }, [router, searchParams, pathname, season]);

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
        datePickerConfig={datePickerConfig}
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
