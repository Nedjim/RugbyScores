"use client";
import { memo, useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getQueryStringFilter } from "@/utils";
import { Match } from "@/libs/types";
import SelectFilter from "@/components/SelectFilter";

function CompetiitonFilter(props: { data: Match[] }) {
  const { data } = props;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const items = useMemo(() => {
    const teamFilter = searchParams.get("team");
    const formattedTeamFilter = getQueryStringFilter(teamFilter);

    const elements = data?.map((i) => {
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
  }, [data, searchParams]);

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
