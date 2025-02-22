import { memo, useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import { ScoresByDateHookResponse } from "@/app/libs/types";
import { usePathname, useSearchParams } from "next/navigation";
import { getQueryStringFilter } from "@/app/utils";
import SelectFilter from "@/app/components/SelectFilter";

function TeamFilter(props: { data: ScoresByDateHookResponse }) {
  const { data } = props;
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const router = useRouter();
  const { data: matchsData } = data;

  const items = useMemo(() => {
    const params = new URLSearchParams(searchParams?.toString());
    const competitionFilter = getQueryStringFilter(params, "competition");

    const elements = matchsData
      ?.map((el) => {
        const { away, home, comp_name } = el;

        if (
          !competitionFilter ||
          (competitionFilter && comp_name === competitionFilter)
        ) {
          return [away, home];
        }
        return [];
      })
      .flat();

    return [...new Set(elements)].sort();
  }, [matchsData, searchParams]);

  const handleChange = useCallback(
    (value: string | null) => {
      const query = { ...router.query, team: value };
      router.push({ pathname, query });
    },
    [pathname, router],
  );

  return <SelectFilter items={items} onChange={handleChange} value="team" />;
}

export default memo(TeamFilter);
