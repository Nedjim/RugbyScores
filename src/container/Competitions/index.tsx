"use client";
import dayjs, { Dayjs } from "dayjs";
import { useDeferredValue, useState } from "react";
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
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search);
  const seasonFilter = searchParams.get("season") || season;

  const title = `Competitions - ${seasonFilter}`;

  const filteredCompetitions = data
    .filter((c) => c.season === Number(seasonFilter))
    .sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }

      return 0;
    });

  const getDatePickerConfig = () => {
    const seasonFilter = searchParams.get("season");
    const value = dayjs().year(Number(seasonFilter) || season);
    const minDate = dayjs(new Date(MIN_YEAR));
    const maxDate = dayjs().add(1, "year");

    return {
      value,
      yearsOrder: "desc",
      views: ["year"],
      minDate,
      maxDate,
      onChange: (value: Dayjs | null) => {
        if (!value) {
          router.push(pathname);
          return;
        }
        const season = String(dayjs(value).format("YYYY"));
        router.push(`${pathname}?season=${season}`);
      },
    } as DatePickerProps;
  };

  const getSearchResults = () => {
    if (!deferredSearch) {
      return filteredCompetitions;
    }

    return filteredCompetitions.filter((e) =>
      e.name.toLowerCase().includes(deferredSearch.toLowerCase()),
    );
  };

  const handleChangeDate = (year: number) => {
    router.push(`${pathname}?season=${year}`);
  };

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
        datePickerConfig={getDatePickerConfig()}
        search={search}
        setSearch={setSearch}
      />
      {!getSearchResults().length ? (
        <EmptyState />
      ) : (
        <CustomLinks links={getSearchResults()} />
      )}
    </div>
  );
};

export default Competitions;
