"use client";
import clsx from "clsx";
import { memo, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { roboto } from "@/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { faFilter } from "@fortawesome/free-solid-svg-icons/faFilter";
import { getDateFilter, useMatchesByDate } from "@/libs/hooks";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MatchesDayDatePicker from "@/components/DatePickers/MatchesDay";
import CompetitionsDatePicker from "@/components/DatePickers/Competitions";
import CompetitionFilter from "./CompetitionFilter";
import TeamFilter from "./TeamFilter";
import StatusFilter from "./StatusFilter";
import styles from "./index.module.scss";

const Aside = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const date = getDateFilter(searchParams?.get("date"));
  const matchesDayEnabled = pathname === "/matches-day";
  const [isExpended, setExpended] = useState(false);

  return (
    <aside
      className={clsx(
        styles.aside,
        isExpended && styles.fullWidth,
        roboto.className,
      )}
    >
      <div
        className={clsx(styles.showFiltersPanel, isExpended && styles.expended)}
      >
        <FontAwesomeIcon icon={faFilter} />
        <IconButton
          color="inherit"
          onClick={() => setExpended(!isExpended)}
          size="small"
        >
          {isExpended ? (
            <FontAwesomeIcon icon={faAngleLeft} />
          ) : (
            <FontAwesomeIcon icon={faAngleRight} />
          )}
        </IconButton>
      </div>
      {isExpended && (
        <div className={styles.filters}>
          {pathname?.includes("/competitions") && <CompetitionsDatePicker />}
          {pathname?.includes("/matches-day") && date && (
            <>
              <MatchesDayDatePicker />
              <Divider sx={{ margin: "32px 0" }}>Filters</Divider>
              {matchesDayEnabled && <MatchesDayFilters />}
              <StatusFilter />
            </>
          )}
        </div>
      )}
    </aside>
  );
};

const MatchesDayFilters = () => {
  const searchParams = useSearchParams();
  const date = getDateFilter(searchParams?.get("date"));
  const {data} = useMatchesByDate(date);

  return (
    <>
      <CompetitionFilter data={data} />
      <TeamFilter data={data} />
    </>
  );
};

export default memo(Aside);
