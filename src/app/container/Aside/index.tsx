import clsx from "clsx";
import { memo, useMemo, useState } from "react";
import { Divider, IconButton } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { ScoresByDateHookResponse } from "@/app/libs/types";
import { getQueryDateFilter, roboto } from "@/app/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { faFilter } from "@fortawesome/free-solid-svg-icons/faFilter";

import CompetitionFilter from "./CompetitionFilter";
import TeamFilter from "./TeamFilter";
import SeasonCalendar from "@/app/components/SeasonCalendar";
import StatusFilter from "./StatusFilter";

import styles from "./index.module.scss";

const Aside = (props: { data: ScoresByDateHookResponse }) => {
  const { data } = props;
  const searchParams = useSearchParams();
  const [isExpended, setExpended] = useState(false);

  const date = useMemo(() => {
    const dateQuery = searchParams?.toString();

    if (!dateQuery?.length) {
      return undefined;
    }

    const params = new URLSearchParams(dateQuery);
    const dateFilter = getQueryDateFilter(params);

    return dateFilter;
  }, [searchParams]);

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
          <SeasonCalendar date={date} />
          {date && (
            <>
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
