import clsx from "clsx";
import { memo, useCallback, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { usePathname, useSearchParams } from "next/navigation";
import { ScoresByDateHookResponse } from "@/app/libs/types";
import { roboto } from "@/app/utils";
import CompetitionFilter from "./CompetitionFilter";
import TeamFilter from "./TeamFilter";
import SeasonCalendar from "@/app/components/SeasonCalendar";
import FilterButton from "@/app/components/FilterButton";
import styles from "./index.module.scss";
import StatusFilter from "./StatusFilter";

const Aside = (props: { data: ScoresByDateHookResponse }) => {
  const { data } = props;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [showFilters, setShowFilters] = useState(true);

  const handleClearFilters = useCallback(() => {
    router.push({ pathname, query: {} });
  }, [pathname, router]);

  return (
    <>
      <aside className={clsx(styles.aside, roboto.className)}>
        <div
          className={clsx(
            styles.showFiltersPanel,
            showFilters && styles.expended,
          )}
        >
          <FilterButton
            showFilters={showFilters}
            setShowFilters={setShowFilters}
          />
          <div className={styles.clearButton}>
            <Button
              sx={{ textTransform: "capitalize" }}
              disabled={!searchParams}
              onClick={handleClearFilters}
              color="inherit"
            >
              Clear
            </Button>
          </div>
        </div>
        {showFilters && (
          <div className={styles.filters}>
            <SeasonCalendar />
            <CompetitionFilter data={data} />
            <TeamFilter data={data} />
            <StatusFilter />
          </div>
        )}
      </aside>
    </>
  );
};

export default memo(Aside);
