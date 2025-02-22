import { memo, useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import { usePathname, useSearchParams } from "next/navigation";
import { ScoresByDateHookResponse } from "@/app/libs/types";
import { getQueryStringFilter } from "@/app/utils";
import SelectFilter from "@/app/components/SelectFilter";

function CompetiitonFilter(props: { data: ScoresByDateHookResponse }) {
  const { data } = props;
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const { data: matchsData } = data;

  const items = useMemo(() => {
    const params = new URLSearchParams(searchParams?.toString());
    const teamFilter = getQueryStringFilter(params, "team");

    const elements = matchsData?.map((i) => {
      const { away, home, comp_name } = i;
      if (
        !teamFilter ||
        (teamFilter && teamFilter === away) ||
        teamFilter === home
      ) {
        return comp_name;
      }
      return "";
    });
    return [...new Set(elements)].filter((e) => e).sort();
  }, [matchsData, searchParams]);

  const handleChange = useCallback(
    (value: string | null) => {
      const query = { ...router.query, competition: value };
      router.push({ pathname, query });
    },
    [pathname, router],
  );

  return (
    <SelectFilter items={items} onChange={handleChange} value="competition" />
  );
}

export default memo(CompetiitonFilter);
