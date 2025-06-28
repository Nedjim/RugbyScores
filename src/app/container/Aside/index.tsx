"use client";
import clsx from "clsx";
import { memo, useState } from "react";
import { Divider, IconButton } from "@mui/material";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { roboto } from "@/app/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { faFilter } from "@fortawesome/free-solid-svg-icons/faFilter";
import { useDateFilter, useScoresByDate } from "@/app/libs/hooks";
import MatchesDayDatePicker from "@/app/components/DatePickers/MatchesDay";
import CompetitionsDatePicker from "@/app/components/DatePickers/Competitions";
import CompetitionFilter from "./CompetitionFilter";
import TeamFilter from "./TeamFilter";
import StatusFilter from "./StatusFilter";
import styles from "./index.module.scss";

const Aside = () => {
  const pathname = usePathname();
  const router = useRouter();
  const date = useDateFilter(router);
  const matchsDayEnabled = pathname === "/matches-day";
  const [isExpended, setExpended] = useState(false);

  const data = useScoresByDate(date, matchsDayEnabled);

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
