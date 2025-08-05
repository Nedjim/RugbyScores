"use client";
import clsx from "clsx";
import { memo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { roboto } from "@/utils";
import { getDateFilter, useMatchesByDate } from "@/libs/hooks";
import { faFilter } from "@fortawesome/free-solid-svg-icons/faFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Divider from "@mui/material/Divider";
import CompetitionFilter from "./CompetitionFilter";
import TeamFilter from "./TeamFilter";
import Tags from "./StatusFilter";
import Loading from "@/app/loading";
import styles from "./index.module.scss";

const Aside = () => {
  const searchParams = useSearchParams();
  const date = getDateFilter(searchParams?.get("date"));
  const { data } = useMatchesByDate(date);

  return (
    <Suspense fallback={<Loading />}>
      <aside className={clsx(styles.aside, roboto.className)}>
        <Divider
          textAlign="left"
          role="presentation"
          className={styles.dividerPresentation}
        >
          <h3 className={styles.title}>
            <FontAwesomeIcon icon={faFilter} />
            <span>Filters</span>
          </h3>
        </Divider>
        <CompetitionFilter data={data} />
        <TeamFilter data={data} />
        <Divider aria-hidden="true" />
        <Tags />
      </aside>
    </Suspense>
  );
};

export default memo(Aside);
