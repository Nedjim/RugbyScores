"use client";
import dayjs, { Dayjs } from "dayjs";
import { memo, useCallback } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const DATE_FORMAT = "DD/MM/YYYY";
const URL_DATA_FILTER_FORMAT = "DD_MM_YYYY";

const SeasonCalendar = (props: { date?: Dayjs }) => {
  const { date } = props;
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = useCallback(
    (value: Dayjs | null) => {
      if (!value) {
        router.push({ pathname, query: {} });
        return;
      }
      const dateQuery = String(dayjs(value).format(URL_DATA_FILTER_FORMAT));
      router.push({ pathname, query: { date: dateQuery } });
    },
    [pathname, router],
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        format={DATE_FORMAT}
        value={date}
        onChange={handleChange}
        slotProps={{
          field: {
            clearable: true,
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default memo(SeasonCalendar);
