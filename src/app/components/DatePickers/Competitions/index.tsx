"use client";
import dayjs, { Dayjs } from "dayjs";
import { memo, useCallback } from "react";
import { useCurrentSeason } from "@/app/libs/hooks";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const FORMAT = "YYYY";
const MIN_YEAR = "1995-01-01";

const CompetitionsDatePicker = () => {
  const currentSeason = useCurrentSeason();
  const router = useRouter();
  const pathname = usePathname();
  const minYear = dayjs(new Date(MIN_YEAR));
  const maxYear = dayjs().add(1, "year");
  const { season: seasonFilter } = router.query;
  const value = dayjs().year(Number(seasonFilter) || currentSeason);

  const handleChange = useCallback(
    (value: Dayjs | null) => {
      if (!value) {
        router.push({ pathname, query: {} });
        return;
      }
      const season = String(dayjs(value).format("YYYY"));
      router.push({ pathname, query: { season } });
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
