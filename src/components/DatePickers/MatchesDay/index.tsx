"use client";
import dayjs, { Dayjs } from "dayjs";
import { memo, useCallback } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { URL_DATA_FILTER_FORMAT } from "@/utils";
import { getDateFilter } from "@/libs/hooks";

const DATE_FORMAT = "DD/MM/YYYY";

const MatchesDay = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const date = getDateFilter(searchParams?.get("date"));

  const handleChange = useCallback(
    (value: Dayjs | null) => {
      if (!value) {
        router.push(pathname);
        return;
      }
      const dateQuery = String(dayjs(value).format(URL_DATA_FILTER_FORMAT));
      router.push(`${pathname}?date=${dateQuery}`);
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

export default memo(MatchesDay);
