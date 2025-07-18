"use client";
import dayjs, { Dayjs } from "dayjs";
import { memo, useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCurrentSeason } from "@/libs/hooks";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const FORMAT = "YYYY";
const MIN_YEAR = "1995-01-01";

const CompetitionsDatePicker = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentSeason = useCurrentSeason();

  const minYear = dayjs(new Date(MIN_YEAR));
  const maxYear = dayjs().add(1, "year");
  const seasonFilter = searchParams.get("season");
  const value = dayjs().year(Number(seasonFilter) || currentSeason);

  const handleChange = useCallback(
    (value: Dayjs | null) => {
      if (!value) {
        router.push(pathname);
        return;
      }
      const season = String(dayjs(value).format("YYYY"));
      router.push(`${pathname}?season=${season}`);
    },
    [pathname, router],
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        format={FORMAT}
        defaultValue={value}
        value={value}
        views={["year"]}
        minDate={minYear}
        maxDate={maxYear}
        yearsOrder="desc"
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

export default memo(CompetitionsDatePicker);
