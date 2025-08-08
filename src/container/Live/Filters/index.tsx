"use client";
import clsx from "clsx";
import { memo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { roboto } from "@/utils";
import { getDateFilter, useMatchesByDate } from "@/libs/hooks";
import { faFilter } from "@fortawesome/free-solid-svg-icons/faFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Divider from "@mui/material/Divider";
import CompetitionFilter from "./CompetitionFilter";
import TeamFilter from "./TeamFilter";
import Tags from "./StatusFilter";
import styles from "./index.module.scss";
import ChevronButton from "@/components/ChevronButton";

const Filters = () => {
  const searchParams = useSearchParams();
  const date = getDateFilter(searchParams?.get("date"));
  const { data } = useMatchesByDate(date);

  const [showFilters, setShowFilters] = useState(false);

  return (
    <aside className={clsx(styles.filters, roboto.className)}>
      <div className={styles.header}>
        <Divider
          textAlign="left"
          role="presentation"
          className={styles.divider}
        >
          <h3 className={styles.title}>
            <FontAwesomeIcon icon={faFilter} />
            <span>Filters</span>
          </h3>
        </Divider>
        <div className={styles.chevron}>
          <ChevronButton
            direction={showFilters ? "down" : "up"}
            onClick={() => setShowFilters(!showFilters)}
          />
        </div>
      </div>
      {
        <div className={clsx(styles.content, showFilters && styles.visible)}>
          <CompetitionFilter data={data} />
          <TeamFilter data={data} />
          <Divider aria-hidden="true" />
          <Tags />
        </div>
      }
    </aside>
  );
};

export default memo(Filters);
