"use client";
import dayjs, { Dayjs } from "dayjs";
import { memo, useCallback, useMemo } from "react";
import { getDateFilter, useMatchesByDate } from "@/libs/hooks";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { matchesFilter } from "@/utils/filters";
import { URL_DATA_FILTER_FORMAT } from "@/utils";
import { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import Matches from "@/container/MatchList";
import DateTitle from "../DateTitle";
import EmptyState from "@/components/EmptyState";
import styles from "./index.module.scss";

const DATE_FORMAT = "DD/MM/YYYY";

const Live = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const date = getDateFilter(searchParams?.get("date"));
  const { data } = useMatchesByDate(date);

  const matches = useMemo(
    () => (data ? matchesFilter({ data, searchParams }) : []),
    [searchParams, data],
  );

  const datePickerConfig: DatePickerProps = useMemo(() => {
    return {
      format: DATE_FORMAT,
      value: date,
      onChange: (value: Dayjs | null) => {
        if (!value) {
          router.push(pathname);
          return;
        }
        const dateQuery = String(dayjs(value).format(URL_DATA_FILTER_FORMAT));
        router.push(`${pathname}?date=${dateQuery}`);
      },
    };
  }, [date, router, pathname]);

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
        datePickerConfig={datePickerConfig}
      />
      {!matches.length ? (
        <EmptyState text="Please adjust your filters. No results were found for this journey." />
      ) : (
        <Matches data={matches} />
      )}
    </div>
  );
};

export default memo(Live);
