"use client";
import clsx from "clsx";
import { memo, Suspense, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { roboto } from "@/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { faFilter } from "@fortawesome/free-solid-svg-icons/faFilter";
import { getDateFilter, useMatchesByDate } from "@/libs/hooks";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CompetitionFilter from "./CompetitionFilter";
import TeamFilter from "./TeamFilter";
import StatusFilter from "./StatusFilter";
import Loading from "@/app/loading";
import styles from "./index.module.scss";

const Aside = () => {
  const pathname = usePathname();
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
          {pathname?.includes("/live") && (
            <Suspense fallback={<Loading />}>
              <FiltersTitle />
              <LiveFilters />
            </Suspense>
          )}
        </div>
      )}
    </aside>
  );
};

const FiltersTitle = () => {
  return (
    <div>
      <Divider sx={{ marginBottom: "16px" }}>Filters</Divider>
    </div>
  );
};

const LiveFilters = () => {
  const searchParams = useSearchParams();
  const date = getDateFilter(searchParams?.get("date"));
  const { data } = useMatchesByDate(date);

  return (
    <>
      <CompetitionFilter data={data} />
      <TeamFilter data={data} />
      <StatusFilter />
    </>
  );
};

export default memo(Aside);
