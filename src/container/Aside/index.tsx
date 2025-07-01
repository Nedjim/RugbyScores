"use client";
import clsx from "clsx";
import { memo, useState } from "react";
import { Divider, IconButton } from "@mui/material";
import { usePathname, useSearchParams } from "next/navigation";
import { roboto } from "@/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { faFilter } from "@fortawesome/free-solid-svg-icons/faFilter";
import { useDateFilter, useMatchesByDate } from "@/libs/hooks";
import MatchesDayDatePicker from "@/components/DatePickers/MatchesDay";
import CompetitionsDatePicker from "@/components/DatePickers/Competitions";
import CompetitionFilter from "./CompetitionFilter";
import TeamFilter from "./TeamFilter";
import StatusFilter from "./StatusFilter";
import styles from "./index.module.scss";

const Aside = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const date = useDateFilter(searchParams?.get("date"));
  const matchesDayEnabled = pathname === "/matches-day";
  const data = useMatchesByDate(date, matchesDayEnabled);
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
          size="small"
          hidden={false}
          color="inherit"
          onClick={() => setExpended(!isExpended)}
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
              <CompetitionFilter data={data} />
              <TeamFilter data={data} />
              <StatusFilter />
            </>
          )}
        </div>
      )}
    </aside>
  );
};

export default memo(Aside);
