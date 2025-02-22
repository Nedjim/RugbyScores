import { memo, useCallback } from "react";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { usePathname, useSearchParams } from "next/navigation";
import { ScoresByDateHookResponse } from "@/app/types";
import SeasonCalendar from "@/components/SeasonCalendar";
import TeamFilter from "./TeamFilter";
import CompetitionFilter from "./CompetitionFilter";
import styles from "./index.module.scss";

const Aside = (props: { data: ScoresByDateHookResponse }) => {
  const { data } = props;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleClearFilters = useCallback(() => {
    router.push({ pathname, query: {} });
  }, [pathname, router]);

  return (
    <aside className={styles.aside}>
      <SeasonCalendar />
      <CompetitionFilter data={data} />
      <TeamFilter data={data} />
      <div className={styles.actions}>
        <Button
          sx={{ textTransform: "capitalize" }}
          disabled={!searchParams}
          onClick={handleClearFilters}
          color="inherit"
        >
          Clear
        </Button>
      </div>
    </aside>
  );
};

export default memo(Aside);
