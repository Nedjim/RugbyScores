"use client";
import dayjs, { Dayjs } from "dayjs";
import { memo, useCallback, useMemo } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { getQueryDateFilter } from "@/app/utils";
import styles from "./index.module.scss";

const DATE_FORMAT = "DD/MM/YYYY";
const URL_DATA_FILTER_FORMAT = "DD_MM_YYYY";

const SeasonCalendar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const date = useMemo(() => {
    const params = new URLSearchParams(searchParams?.toString());
    const dateFilter = getQueryDateFilter(params);

    return dateFilter || null;
  }, [searchParams]);

  const handleChange = useCallback(
    (value: Dayjs | null) => {
      const dateQuery = String(dayjs(value).format(URL_DATA_FILTER_FORMAT));
      router.push({ pathname, query: { date: dateQuery } });
    },
    [pathname, router],
  );

  return (
    <div className={styles.calendarWrapper}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className={styles.datePicker}
          format={DATE_FORMAT}
          value={date}
          onChange={handleChange}
        />
      </LocalizationProvider>
    </div>
  );
};

export default memo(SeasonCalendar);
