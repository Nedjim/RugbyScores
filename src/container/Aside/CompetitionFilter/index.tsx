"use client";
import { memo, useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getQueryStringFilter } from "@/utils";
import SelectFilter from "@/components/SelectFilter";
import { ScoresByDateHookResponse } from "@/libs/types";

function CompetiitonFilter(props: { data: ScoresByDateHookResponse }) {
  const { data } = props;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { data: matchsData } = data;

  const items = useMemo(() => {
    const teamFilter = searchParams.get("team");
    const formattedTeamFilter = getQueryStringFilter(teamFilter);

    const elements = matchsData?.map((i) => {
      const { away, home, comp_name } = i;
      if (
        !formattedTeamFilter ||
        (formattedTeamFilter && formattedTeamFilter === away) ||
        formattedTeamFilter === home
      ) {
        return comp_name;
      }
      return "";
    });

    return [...new Set(elements)].filter((e) => e).sort();
  }, [matchsData, searchParams]);

  const handleChange = useCallback(
    (value: string | null) => {
      router.push(
        `${pathname}?${searchParams.toString()}&competition=${value}`,
      );
    },
    [pathname, searchParams, router],
  );

  return (
    <SelectFilter items={items} onChange={handleChange} value="competition" />
  );
}

export default memo(CompetiitonFilter);
