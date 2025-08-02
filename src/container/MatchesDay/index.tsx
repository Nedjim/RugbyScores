"use client";
import { memo, useCallback, useMemo } from "react";
import { getDateFilter, useMatchesByDate } from "@/libs/hooks";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { matchesFilter } from "@/utils/filters";
import Matches from "@/container/MatchList";
import DateTitle from "../../components/DateTitle";
import EmptyState from "@/components/EmptyState";
import styles from "./index.module.scss";
import dayjs, { Dayjs } from "dayjs";
import { URL_DATA_FILTER_FORMAT } from "@/utils";

const MatchesDay = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const date = getDateFilter(searchParams?.get("date"));
  const { data } = useMatchesByDate(date);

  const matches = useMemo(
    () => (data ? matchesFilter({ data, searchParams }) : []),
    [searchParams, data],
  );

  const handleChangeDate = useCallback(
    (date: Dayjs) => {
      const dateQuery = String(dayjs(date).format(URL_DATA_FILTER_FORMAT));
      router.push(`${pathname}?date=${dateQuery}`);
    },
    [pathname, router],
  );

  return (
    <div className={styles.content}>
      <DateTitle
        title={date.format("LL")}
        onPrevious={() => {
          const previous = date.subtract(1, "day");
          handleChangeDate(previous);
        }}
        onNext={() => {
          const next = date.add(1, "day");
          handleChangeDate(next);
        }}
      />
      {!matches.length ? (
        <EmptyState text="Please adjust your filters. No results were found for this journey." />
      ) : (
        <Matches data={matches} />
      )}
    </div>
  );
};

export default memo(MatchesDay);
